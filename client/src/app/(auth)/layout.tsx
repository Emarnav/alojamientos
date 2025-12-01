"use client";

import Navbar from "@/components/Navbar";
import AuthProvider from "./authProvider";
import Footer from "@/components/Footer";
import { NAVBAR_HEIGHT } from "@/lib/constants";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <main
          className="flex-1 flex items-start justify-center w-full px-4 py-8"
          style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
        >
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}
