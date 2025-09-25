"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useAuth } from "@/app/(auth)/authProvider";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user: authUser, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || !authUser) {
      setIsLoading(false);
      return;
    }

    const userRole = authUser.tipo?.toLowerCase();

    if (userRole === "propietario" && pathname === "/") {
      setIsLoading(true);
      router.push("/propietario/alojamientos", { scroll: false });
    } else {
      setIsLoading(false);
    }
  }, [authUser, isAuthenticated, router, pathname]);

  if (isLoading) return <>Cargando...</>;

  return (
    <div>
      <main
        className={`h-full flex w-full flex-col container mx-auto`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;