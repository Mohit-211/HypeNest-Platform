// src/contexts/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type UserRole = "brand" | "creator" | "admin";

export interface User {
  id?: string;
  email: string;
  name?: string;
  role: UserRole;
  avatar?: string;
  companyName?: string; // for brands
  username?: string; // for creators
}

interface SignupExtras {
  brandName?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ role: UserRole }>;
  signup: (
    email: string,
    password: string,
    role: Exclude<UserRole, "admin">,
    name: string,
    extras?: SignupExtras
  ) => Promise<{ email: string }>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void; // local cache update; wire to API later if needed
}

// ---- Config ----
const API_URL = import.meta.env.VITE_API_URL as string; // e.g. https://node.hypenestmedia.com/api
const LS_TOKEN = "hn_token";
const LS_USER = "hn_user";

// ---- Helpers ----
async function request<T>(
  path: string,
  options: RequestInit = {},
  token?: string | null
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) {
    let msg = `Request failed (${res.status})`;
    try {
      const data = await res.json();
      msg = (data?.error || data?.message || msg) as string;
    } catch {
      // ignore
    }
    throw new Error(msg);
  }
  return res.json();
}

type LoginResponse = {
  token: string;
  role: "BRAND" | "CREATOR" | "ADMIN";
  name?: string;
};

type RegisterResponse = {
  message: string;
  email: string;
};

const roleMapBackToFront: Record<LoginResponse["role"], UserRole> = {
  BRAND: "brand",
  CREATOR: "creator",
  ADMIN: "admin",
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem(LS_TOKEN)
  );
  const [user, setUser] = useState<User | null>(() => {
    const raw = localStorage.getItem(LS_USER);
    return raw ? (JSON.parse(raw) as User) : null;
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Persist token/user
  useEffect(() => {
    if (token) localStorage.setItem(LS_TOKEN, token);
    else localStorage.removeItem(LS_TOKEN);
  }, [token]);

  useEffect(() => {
    if (user) localStorage.setItem(LS_USER, JSON.stringify(user));
    else localStorage.removeItem(LS_USER);
  }, [user]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const data = await request<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const normalizedRole = roleMapBackToFront[data.role];
      setToken(data.token);
      setUser({
        email,
        name: data.name,
        role: normalizedRole,
      });
      return { role: normalizedRole };
    } finally {
      setIsLoading(false);
    }
  };

  // Returns the email so you can route to /verify-otp?email=...
  const signup = async (
    email: string,
    password: string,
    role: Exclude<UserRole, "admin">,
    name: string,
    extras?: SignupExtras
  ) => {
    setIsLoading(true);
    try {
      const payload: Record<string, any> = { email, password, name, role };
      if (role === "brand" && extras?.brandName)
        payload.brandName = extras.brandName;

      const res = await request<RegisterResponse>("/auth/register", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      // We do NOT set token or user here — user must verify OTP first.
      return { email: res.email };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  // Local update only (no API). If you add a PATCH /users/me, call it here.
  const updateProfile = (updates: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    setUser(updated);
  };

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      token,
      isLoading,
      isAuthenticated: !!token && !!user,
      login,
      signup,
      logout,
      updateProfile,
    }),
    [user, token, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}

// ---- Route guard helpers (hooks that return booleans) ----
export function useRequireAuth(): boolean {
  const { isAuthenticated } = useAuth();
  return isAuthenticated;
}

export function useRequireRole(allowedRoles: UserRole[]): boolean {
  const { user } = useAuth();
  return !!user && allowedRoles.includes(user.role);
}

// ---- Optional: ProtectedRoute components (if you want JSX guards) ----
// Example usage with React Router:
// <Protected>{children}</Protected>
// <RoleProtected roles={['brand']}>{children}</RoleProtected>
export function Protected({ children }: { children: ReactNode }) {
  const ok = useRequireAuth();
  if (!ok) {
    // Replace with your router’s Navigate to /auth
    if (typeof window !== "undefined") window.location.href = "/auth";
    return null;
  }
  return <>{children}</>;
}

export function RoleProtected({
  roles,
  children,
}: {
  roles: UserRole[];
  children: ReactNode;
}) {
  const ok = useRequireRole(roles);
  if (!ok) {
    if (typeof window !== "undefined") window.location.href = "/auth";
    return null;
  }
  return <>{children}</>;
}
