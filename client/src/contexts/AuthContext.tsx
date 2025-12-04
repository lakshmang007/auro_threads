import { createContext, useContext, useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("user");
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // todo: remove mock functionality - replace with actual API calls
  const login = async (email: string, _password: string): Promise<boolean> => {
    // Mock login - in production, this would call the API
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const mockUser: User = {
      id: "user-1",
      name: email.split("@")[0],
      email,
      role: email.includes("admin") ? "admin" : "user",
    };
    
    setUser(mockUser);
    return true;
  };

  // todo: remove mock functionality - replace with actual API calls
  const register = async (name: string, email: string, _password: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const mockUser: User = {
      id: "user-" + Date.now(),
      name,
      email,
      role: "user",
    };
    
    setUser(mockUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin",
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
