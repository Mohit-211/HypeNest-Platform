// src/lib/api.ts
export const API_URL = import.meta.env.VITE_API_URL as string;

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include", // optional; remove if you don’t use cookies
    ...options,
  });

  if (!res.ok) {
    let msg = "Request failed";
    try {
      const data = await res.json();
      msg = data?.error || data?.message || msg;
    } catch {}
    throw new Error(msg);
  }

  return res.json();
}

export const api = {
  register: (payload: {
    email: string;
    password: string;
    name: string;
    role: "brand" | "creator";
    brandName?: string;
  }) =>
    request<{ message: string; email: string }>("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  verifyOtp: (payload: { email: string; code: string }) =>
    request<{ message: string }>("/auth/verify-otp", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  login: (payload: { email: string; password: string }) =>
    request<{
      token: string;
      role: "BRAND" | "CREATOR" | "ADMIN";
      name?: string;
    }>("/auth/login", { method: "POST", body: JSON.stringify(payload) }),
};
