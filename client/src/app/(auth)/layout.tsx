"use client";

import Navbar from "@/components/Navbar";
import AuthProvider from "./authProvider";
import Footer from "@/components/Footer";
import { NAVBAR_HEIGHT } from "@/lib/constants";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main
        className="flex-1 flex items-center justify-center w-full px-4"
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        <div className="container mx-auto flex justify-center">
          <AuthProvider>
            {children}
          </AuthProvider>
        </div>
      </main>
    </div>
    
  );
}
