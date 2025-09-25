"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRegisterMutation } from "@/state/api";
import { useAuth } from "../authProvider";
import { toast } from "sonner";

const RegistroPage = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tipo, setTipo] = useState<string>("");
  const [register, { isLoading }] = useRegisterMutation();
  const { login: authLogin } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombre || !email || !password || !confirmPassword || !tipo) {
      toast.error("Por favor, completa todos los campos");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    if (password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      const result = await register({ nombre, email, password, tipo }).unwrap();
      
      if (result.needsEmailVerification) {
        toast.success("Cuenta creada exitosamente");
        toast.info("Revisa tu email para confirmar tu cuenta antes de iniciar sesión");
        
        // Si hay token de verificación (desarrollo), mostrarlo
        if (result.verificationToken) {
          console.log("Token de verificación (desarrollo):", result.verificationToken);
          toast.info(`Token de desarrollo: ${result.verificationToken}`);
        }
        
        // Redirigir a página de verificación
        router.push("/verificar-email");
      } else {
        // Login automático si no necesita verificación (por compatibilidad)
        authLogin(result.token, result.user);
        toast.success("Registro exitoso");
        router.push("/");
      }
    } catch (error: any) {
      console.error("Error en registro:", error);
      toast.error(error.data?.message || "Error al registrarse");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Registro</CardTitle>
        <CardDescription>
          <span className="font-bold">¡Bienvenido!</span> Crea una cuenta para contactar con propietarios de alojamientos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Introduce tu nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
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
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirma tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="space-y-3">
            <Label>Perfil</Label>
            <RadioGroup value={tipo} onValueChange={setTipo} className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Estudiante" id="estudiante" />
                <Label htmlFor="estudiante">Estudiante</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Propietario" id="propietario" />
                <Label htmlFor="propietario">Propietario</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Registrando..." : "Registrarse"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-center">
        <p className="text-muted-foreground">
          ¿Ya estás registrado?{" "}
          <Link href="/login" className="text-primary hover:underline font-bold">
            Inicia sesión
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default RegistroPage;
