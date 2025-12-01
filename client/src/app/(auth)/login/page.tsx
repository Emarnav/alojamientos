"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLoginMutation } from "@/state/api";
import { useAuth } from "../authProvider";
import { toast } from "sonner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const { login: authLogin } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Por favor, completa todos los campos");
      return;
    }

    try {
      const result = await login({ email, password }).unwrap();
      authLogin(result.token, result.user);
      toast.success("Inicio de sesión exitoso");
      router.push("/");
    } catch (error: any) {
      console.error("Error en login:", error);

      if (error.data?.needsEmailVerification) {
        toast.error("Debes confirmar tu email antes de iniciar sesión");
        toast.info("Revisa tu bandeja de entrada o ve a verificar email");
      } else {
        toast.error(error.data?.message || "Error al iniciar sesión");
      }
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Iniciar sesión</CardTitle>
        <CardDescription>
          <span className="font-bold">¡Bienvenido de nuevo!</span> Accede a tu cuenta para continuar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Introduce tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3 text-center">
        <p className="text-muted-foreground">
          ¿No tienes cuenta?{" "}
          <Link href="/registro" className="text-primary hover:underline font-bold">
            Regístrate aquí
          </Link>
        </p>
        <div className="flex flex-col space-y-2 text-sm">
          <Link
            href="/recuperar-contrasena"
            className="text-muted-foreground hover:text-primary hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <Link
            href="/verificar-email"
            className="text-muted-foreground hover:text-primary hover:underline"
          >
            ¿No has verificado tu email?
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
