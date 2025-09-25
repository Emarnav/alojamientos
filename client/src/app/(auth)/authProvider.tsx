"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import { useGetAuthUserQuery } from "@/state/api";
import { Usuario } from "@/types/prismaTypes";
import { NAVBAR_HEIGHT } from "@/lib/constants";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, userData: any) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const Auth = ({ children }: { children?: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage = Boolean(pathname.match(/^\/(login|registro|recuperar-contrasena)$/));

  // Solo hacer la query si estamos autenticados Y no en una página de auth
  const { data: userData, isLoading, isError } = useGetAuthUserQuery(undefined, {
    skip: !isAuthenticated || isAuthPage || !isInitialized
  });

  // Initialize authentication state on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    
    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setIsAuthenticated(true);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
    setIsInitialized(true);
  }, []);

  // Update user data when query succeeds (solo si tenemos datos frescos)
  useEffect(() => {
    if (userData && isAuthenticated && !isAuthPage) {
      setUser(userData);
    }
  }, [userData, isAuthenticated, isAuthPage]);

  // Handle API errors (token expired, etc.)
  useEffect(() => {
    if (isError && isAuthenticated && !isAuthPage) {
      // El token probablemente expiró, hacer logout
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      setIsAuthenticated(false);
      router.push("/login");
    }
  }, [isError, isAuthenticated, isAuthPage, router]);

  // Redirect logic - solo después de inicializar
  useEffect(() => {
    if (!isInitialized) return;
    
    // Si estás autenticado y en una página de auth, redirigir al home
    if (isAuthenticated && isAuthPage) {
      router.push("/");
    }
  }, [isAuthenticated, isAuthPage, router, isInitialized]);

  const login = (token: string, userData: any) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    router.push("/login");
  };

  const contextValue: AuthContextType = {
    user,
    isAuthenticated,
    login,
    logout,
    isLoading: !isInitialized || isLoading,
  };

  if (isAuthPage) {
    return (
      <AuthContext.Provider value={contextValue}>
        <div 
          className="flex flex-col justify-between"
          style={{ 
            minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
            height: `calc(100vh - ${NAVBAR_HEIGHT}px)`
          }}
        >
          <main className="flex-grow flex items-center justify-center py-8">
            {children}
          </main>
        </div>
      </AuthContext.Provider>

    );
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
              <Footer />

    </AuthContext.Provider>
    
  );
};

export default Auth;