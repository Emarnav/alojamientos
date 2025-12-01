// app/layout.tsx
"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { SidebarProvider } from "@/components/ui/sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="es">
      <head>
        {/* META TAGS PARA BLOQUEAR INDEXACIÓN COMPLETA */}
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate, noimageclick" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="slurp" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="duckduckbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        
        {/* Prevenir que se muestre en resultados de búsqueda */}
        <meta name="description" content="Sitio en desarrollo - No disponible públicamente" />
        <meta name="keywords" content="" />
        
        {/* Prevenir compartición en redes sociales */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sitio en Desarrollo" />
        <meta property="og:description" content="Este sitio web está en desarrollo" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Sitio en Desarrollo" />
        <meta name="twitter:description" content="Este sitio web está en desarrollo" />
        
        {/* Headers adicionales de seguridad */}
        <meta httpEquiv="X-Robots-Tag" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans`}
        style={{ fontFamily: "var(--font-inter), Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
      >

        <Providers>
          <div>
            <SidebarProvider>
              <Navbar />
              <main
                className="h-full w-full flex flex-col"
                style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
              >
                {children}
              </main>
            </SidebarProvider>
          </div>
        </Providers>

        <Toaster closeButton />
      </body>
    </html>
  );
}
