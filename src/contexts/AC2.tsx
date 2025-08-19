import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type UserRole = "brand" | "creator";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  companyName?: string; // for brands
  username?: string; // for creators
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    email: string,
    password: string,
    role: UserRole,
    name: string
  ) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: "1",
    email: "brand@example.com",
    name: "Sarah Johnson",
    role: "brand",
    avatar: "/placeholder.svg",
    companyName: "TechCorp Inc.",
  },
  {
    id: "2",
    email: "creator@example.com",
    name: "Alex Chen",
    role: "creator",
    avatar: "/placeholder.svg",
    username: "@alexchen",
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const savedUser = localStorage.getItem("hypenest_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const foundUser = mockUsers.find((u) => u.email === email);
    if (!foundUser) {
      setIsLoading(false);
      throw new Error("Invalid credentials");
    }

    setUser(foundUser);
    localStorage.setItem("hypenest_user", JSON.stringify(foundUser));
    setIsLoading(false);

    // Redirect based on role
    if (typeof window !== "undefined") {
      const redirectPath =
        foundUser.role === "brand" ? "/brand/dashboard" : "/creator/dashboard";
      window.location.href = redirectPath;
    }
  };

  const signup = async (
    email: string,
    password: string,
    role: UserRole,
    name: string
  ) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role,
      avatar: "/placeholder.svg",
      ...(role === "brand"
        ? { companyName: name }
        : { username: `@${name.toLowerCase().replace(" ", "")}` }),
    };

    setUser(newUser);
    localStorage.setItem("hypenest_user", JSON.stringify(newUser));
    setIsLoading(false);

    // Redirect based on role
    if (typeof window !== "undefined") {
      const redirectPath =
        newUser.role === "brand" ? "/brand/dashboard" : "/creator/dashboard";
      window.location.href = redirectPath;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hypenest_user");
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem("hypenest_user", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Route guards
export function requireAuth() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated;
}

export function requireRole(allowedRoles: UserRole[]) {
  const { user } = useAuth();
  return user && allowedRoles.includes(user.role);
}
