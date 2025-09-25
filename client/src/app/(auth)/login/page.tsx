"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
        // Opcionalmente redirigir a página de verificación
        // router.push("/verificar-email");
      } else {
        toast.error(error.data?.message || "Error al iniciar sesión");
      }
    }
  };

  const features = [
    "Propiedades verificadas y seguras",
    "Ubicaciones cerca del campus UCH-CEU",
    "Proceso de reserva simplificado",
    "Soporte 24/7 para estudiantes"
  ];

  return (
    <div className="min-h-screen flex">
      {/* Panel izquierdo - Branding */}
      <div className="flex-1 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-12 flex flex-col justify-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="text-white relative z-10">
          <h1 className="text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Bienvenido a{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              UCH-CEU Housing
            </span>
          </h1>
          
          <p className="text-xl xl:text-2xl mb-8 opacity-90 leading-relaxed">
            Encuentra tu hogar ideal cerca del campus. Cómodo, seguro y perfecto para tu vida universitaria.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-lg opacity-90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Panel derecho - Formulario */}
      <div className="flex-1 flex items-center justify-center p-12 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Iniciar sesión
              </h2>
              <p className="text-gray-600">
                Accede a tu cuenta para continuar
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Correo electrónico
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 rounded-xl border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-12 rounded-xl border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  "Iniciando sesión..."
                ) : (
                  <>
                    Iniciar sesión
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 space-y-4 text-center text-sm">
              <p className="text-gray-600">
                ¿No tienes cuenta?{" "}
                <Link href="/registro" className="text-primary-600 hover:text-primary-700 font-semibold hover:underline">
                  Regístrate aquí
                </Link>
              </p>
              
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/recuperar-contrasena" 
                  className="text-gray-500 hover:text-primary-600 hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
                <Link 
                  href="/verificar-email" 
                  className="text-gray-500 hover:text-primary-600 hover:underline"
                >
                  ¿No has verificado tu email?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
