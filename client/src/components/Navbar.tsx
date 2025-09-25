"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/(auth)/authProvider";
import { useUserSuspension } from "@/hooks/useUserSuspension";
import { Plus, Search } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const { shouldShowWarning } = useUserSuspension();

  const isDashboardPage =
    pathname.includes("/propietario") || pathname.includes("/estudiante");

  const handleSignOut = () => {
    logout();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full z-50"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-4 px-6 backdrop-blur-md bg-white/90 text-foreground border-b border-white/20 shadow-lg">
        <div className="flex items-center gap-4 md:gap-6">
          {isDashboardPage && (
            <div className="md:hidden">
              <SidebarTrigger />
            </div>
          )}
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-300"
            scroll={false}
          >
              <Image
                src="/logo.webp"
                alt="UCHCEU Logo"
                width={160}
                height={40}
                className="object-contain"
              />
          </Link>
          {isDashboardPage && isAuthenticated && user && 
           !(user?.userRole?.toLowerCase() === "propietario" && shouldShowWarning) && (
            <Button
              variant="secondary"
              className="md:ml-4 bg-primary-50 text-primary-700 hover:bg-secondary-500 hover:text-primary-50"
              onClick={() =>
                router.push(
                  user?.userRole?.toLowerCase() === "propietario"
                    ? "/propietario/nuevo-alojamiento"
                    : "/busqueda"
                )
              }
            >
              {user?.userRole?.toLowerCase() === "propietario" ? (
                <>
                  <Plus className="h-4 w-4" />
                  <span className="hidden md:block ml-2">Añadir nuevo alojamiento</span>
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  <span className="hidden md:block ml-2">
                    Buscar propiedades
                  </span>
                </>
              )}
            </Button>
          )}
        </div>
        {!isDashboardPage && (
          <div className="hidden md:block">
            <Link href="/busqueda">
              <Button
                variant="outline"
                className="text-muted-foreground border-border bg-transparent hover:bg-primary hover:text-white transition-colors duration-200"
              >
                <Search className="h-4 w-4 mr-2" />
                Ver alojamientos
              </Button>
            </Link>
          </div>
        )}
        <div className="flex items-center gap-3">
          {isAuthenticated && user ? (
            <>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:bg-accent hover:text-primary transition-colors duration-200"
                onClick={() => {
                  const role = user?.userRole?.toLowerCase();
                  if (role === "propietario") {
                    router.push("/propietario/alojamientos");
                  } else if (role === "estudiante") {
                    router.push("/estudiante/solicitudes");
                  } else if (role === "admin") {
                    router.push("/admin/alojamientos");
                  }
                }}
              >
                Panel de control
              </Button>

              <Button
                variant="ghost"
                className="text-muted-foreground hover:bg-accent hover:text-destructive transition-colors duration-200"
                onClick={handleSignOut}
              >
                Cerrar sesión
              </Button>

            </>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="text-muted-foreground border-border bg-transparent hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Iniciar sesión
                </Button>
              </Link>
              <Link href="/registro">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                >
                  Crear cuenta
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
