"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useVerifyEmailMutation, useResendVerificationEmailMutation } from "@/state/api";
import { toast } from "sonner";
import { CheckCircle, AlertCircle, Mail } from "lucide-react";

const VerificarEmailContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  
  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [manualToken, setManualToken] = useState("");
  
  const [verifyEmail, { isLoading: isVerifyLoading }] = useVerifyEmailMutation();
  const [resendVerification, { isLoading: isResendLoading }] = useResendVerificationEmailMutation();

  // Auto-verificar si hay token en la URL
  useEffect(() => {
    if (token) {
      handleVerifyEmail(token);
    }
  }, [token]);

  const handleVerifyEmail = async (verificationToken: string) => {
    if (!verificationToken) {
      toast.error("Token de verificación requerido");
      return;
    }

    setIsVerifying(true);
    try {
      await verifyEmail({ token: verificationToken }).unwrap();
      setIsVerified(true);
      toast.success("¡Email verificado exitosamente!");
      
      // Redirigir al login después de 2 segundos
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      console.error("Error verificando email:", error);
      toast.error(error.data?.message || "Error al verificar el email");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Por favor, introduce tu email");
      return;
    }

    try {
      const result = await resendVerification({ email }).unwrap();
      toast.success("Email de verificación enviado nuevamente");
      
      // Si hay token en desarrollo, mostrarlo
      if (result.verificationToken) {
        console.log("Token de verificación (desarrollo):", result.verificationToken);
        toast.info(`Token de desarrollo: ${result.verificationToken}`);
      }
    } catch (error: any) {
      console.error("Error reenviando email:", error);
      toast.error(error.data?.message || "Error al reenviar el email");
    }
  };

  const handleManualVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleVerifyEmail(manualToken);
  };

  if (isVerified) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 text-green-500">
            <CheckCircle size={48} />
          </div>
          <CardTitle className="text-2xl font-bold text-green-600">¡Email Verificado!</CardTitle>
          <CardDescription>
            Tu cuenta ha sido confirmada exitosamente
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-4">
            Tu email ha sido verificado correctamente. Ahora puedes iniciar sesión en tu cuenta.
          </p>
          <p className="text-sm text-muted-foreground">
            Serás redirigido al inicio de sesión en unos segundos...
          </p>
        </CardContent>
        <CardFooter className="text-center">
          <Link href="/login" className="w-full">
            <Button className="w-full">
              Ir a iniciar sesión
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 text-blue-500">
          <Mail size={48} />
        </div>
        <CardTitle className="text-2xl font-bold">Verificar Email</CardTitle>
        <CardDescription>
          {token ? "Verificando tu cuenta..." : "Confirma tu dirección de email"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isVerifying ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Verificando tu email...</p>
          </div>
        ) : token ? (
          <div className="text-center">
            <AlertCircle className="h-8 w-8 text-amber-500 mx-auto mb-4" />
            <p className="mb-4">Error al verificar automáticamente. Intenta de nuevo:</p>
            <Button 
              onClick={() => handleVerifyEmail(token)}
              disabled={isVerifyLoading}
              className="w-full"
            >
              {isVerifyLoading ? "Verificando..." : "Verificar Email"}
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Reenviar email */}
            <div>
              <h3 className="text-lg font-medium mb-2">Reenviar email de verificación</h3>
              <form onSubmit={handleResendEmail} className="space-y-4">
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
                <Button type="submit" className="w-full" disabled={isResendLoading}>
                  {isResendLoading ? "Enviando..." : "Reenviar email"}
                </Button>
              </form>
            </div>

            {/* Verificación manual */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-medium mb-2">¿Tienes un token?</h3>
              <form onSubmit={handleManualVerify} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="token">Token de verificación</Label>
                  <Input
                    id="token"
                    type="text"
                    placeholder="Pega tu token aquí"
                    value={manualToken}
                    onChange={(e) => setManualToken(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isVerifyLoading}>
                  {isVerifyLoading ? "Verificando..." : "Verificar con token"}
                </Button>
              </form>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-center">
        <Link href="/login" className="text-primary hover:underline">
          Volver al inicio de sesión
        </Link>
      </CardFooter>
    </Card>
  );
};

const VerificarEmailPage = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <VerificarEmailContent />
    </Suspense>
  );
};

export default VerificarEmailPage;