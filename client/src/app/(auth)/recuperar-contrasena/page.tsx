"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useForgotPasswordMutation, useResetPasswordMutation } from "@/state/api";
import { toast } from "sonner";

const RecuperarContrasenaContent = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const isResetMode = !!token;

  // Forgot password state
  const [email, setEmail] = useState("");
  const [forgotPassword, { isLoading: isForgotLoading }] = useForgotPasswordMutation();

  // Reset password state
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, { isLoading: isResetLoading }] = useResetPasswordMutation();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Por favor, introduce tu email");
      return;
    }

    try {
      const result = await forgotPassword({ email }).unwrap();
      toast.success("Se ha enviado un enlace de recuperación a tu email");
      
      // In development, show the token (remove in production)
      if (result.resetToken) {
        console.log("Reset token (development only):", result.resetToken);
        toast.info(`Token de recuperación (solo desarrollo): ${result.resetToken}`);
      }
    } catch (error: any) {
      console.error("Error en forgot password:", error);
      toast.error(error.data?.message || "Error al enviar el enlace de recuperación");
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newPassword || !confirmPassword) {
      toast.error("Por favor, completa todos los campos");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      await resetPassword({ token: token!, newPassword }).unwrap();
      toast.success("Contraseña actualizada exitosamente");
      window.location.href = "/login";
    } catch (error: any) {
      console.error("Error en reset password:", error);
      toast.error(error.data?.message || "Error al actualizar la contraseña");
    }
  };

  if (isResetMode) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Nueva contraseña</CardTitle>
          <CardDescription>
            Introduce tu nueva contraseña
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">Nueva contraseña</Label>
              <Input
                id="newPassword"
                type="password"
                placeholder="Introduce tu nueva contraseña"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirma tu nueva contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isResetLoading}>
              {isResetLoading ? "Actualizando..." : "Actualizar contraseña"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <Link href="/login" className="text-primary hover:underline">
            Volver al inicio de sesión
          </Link>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Recuperar contraseña</CardTitle>
        <CardDescription>
          Introduce tu email y te enviaremos un enlace para recuperar tu contraseña
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleForgotPassword} className="space-y-4">
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
          <Button type="submit" className="w-full" disabled={isForgotLoading}>
            {isForgotLoading ? "Enviando..." : "Enviar enlace de recuperación"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-center">
        <Link href="/login" className="text-primary hover:underline">
          Volver al inicio de sesión
        </Link>
      </CardFooter>
    </Card>
  );
};

const RecuperarContrasenaPage = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <RecuperarContrasenaContent />
    </Suspense>
  );
};

export default RecuperarContrasenaPage;
