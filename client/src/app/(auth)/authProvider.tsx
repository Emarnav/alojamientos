"use client";

import React, { useEffect } from "react";
import { Amplify } from "aws-amplify";
import {
  Authenticator,
  Heading,
  Radio,
  RadioGroupField,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useRouter, usePathname } from "next/navigation";
import { I18n } from "aws-amplify/utils";
import { translations } from "@aws-amplify/ui-react";
import { fetchAuthSession, signOut } from "aws-amplify/auth";
import { jwtDecode } from "jwt-decode";

I18n.putVocabularies(translations);
I18n.setLanguage("es");

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
    },
  },
});

const components = {
  Header() {
    return (
      <View className="mt-4 mb-7 !text-center">
        <Heading level={3} className="!text-2xl !font-bold">
          UCH
          <span className="text-secondary-500 font-light hover:!text-primary-300">
            CEU
          </span>
        </Heading>
        <p className="text-muted-foreground mt-2">
          <span className="font-bold">¡Bienvenido!</span> Accede o regístrate para explorar las propiedades disponibles.
        </p>
      </View>
    );
  },
  SignIn: {
    Footer() {
      const { toSignUp, toForgotPassword } = useAuthenticator();
      return (
        <View className="text-center mt-4">
          <p className="text-muted-foreground">
            ¿No estás registrado?{" "}
            <button
              onClick={toSignUp}
              className="text-primary hover:underline bg-transparent border-none p-0 font-bold"
            >
              Regístrate.
            </button>
          </p>
          <p className="text-muted-foreground">
            <button
              onClick={toForgotPassword}
              className="text-primary hover:underline bg-transparent border-none p-0 mt-2"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </p>
        </View>
      );
    },
  },
  SignUp: {
    FormFields() {
      const { validationErrors } = useAuthenticator();

      return (
        <>
          <Authenticator.SignUp.FormFields />
          <RadioGroupField
            legend="Perfil"
            name="custom:role"
            errorMessage={validationErrors?.["custom:role"]}
            hasError={!!validationErrors?.["custom:role"]}
            isRequired
          >
            <Radio value="Estudiante">Estudiante</Radio>
            <Radio value="Propietario">Propietario</Radio>
          </RadioGroupField>
        </>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View className="text-center mt-4">
          <p className="text-muted-foreground">
            ¿Ya estás registrado?{" "}
            <button
              onClick={toSignIn}
              className="text-primary hover:underline bg-transparent border-none p-0 font-bold"
            >
              Inicia sesión.
            </button>
          </p>
        </View>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      order: 1,
      placeholder: "Introduce tu email",
      label: "Email",
      isRequired: true,
    },
    password: {
      order: 2,
      placeholder: "Introduce tu contraseña",
      label: "Password",
      isRequired: true,
    },
  },
  signUp: {
    name: {
      order: 1,
      placeholder: "Introduce tu nombre completo",
      label: "Nombre",
      isRequired: true,
    },
    username: {
      order: 2,
      placeholder: "Introduce tu email",
      label: "Email",
      isRequired: true,
    },
    password: {
      order: 3,
      placeholder: "Introduce tu contraseña",
      label: "Contraseña",
      isRequired: true,
    },
    confirm_password: {
      order: 4,
      placeholder: "Confirma tu contraseña",
      label: "Confirmar contraseña",
      isRequired: true,
    },
  },
  forgotPassword: {
    username: {
      order: 1,
      placeholder: "Introduce tu email",
      label: "Email",
      isRequired: true,
    },
  },
};

interface AuthProps {
  children?: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage = pathname.match(/^\/(login|registro|recuperar-contrasena)$/);
  const isDashboardPage =
    pathname.startsWith("/propietario") || pathname.startsWith("/estudiante") || pathname.startsWith("/admin");

useEffect(() => {
  // Solo ejecutar si estamos en páginas de auth Y el usuario ya está autenticado
  if (!isAuthPage || !user) return;

  const crearUsuarioEnBD = async () => {
    try {

      const session = await fetchAuthSession();
      const idToken = session.tokens?.idToken?.toString();
      if (!idToken) {
        console.warn("No se encontró el idToken");
        return;
      }

      const payload: any = jwtDecode(idToken);

      const role = payload["custom:role"]?.toLowerCase();
      const nombre = payload.name;
      const email = payload.email;

      if (!role || !nombre || !email) {
        console.warn("Faltan datos necesarios en el payload:", { role, nombre, email });
        return;
      }

      if (role !== "estudiante" && role !== "propietario") {
        console.warn("Rol no válido:", role);
        return;
      }

      const endpoint = role === "estudiante" ? "/estudiante" : "/propietario";

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ nombre, telefono: "" }),
      });

    } catch (error) {
      console.error("Error en creación de usuario:", error);
    }
  };

  crearUsuarioEnBD();
}, [isAuthPage, user]);


  // 🔁 Redirección si ya ha iniciado sesión y está en página de login
  useEffect(() => {
    if (user && isAuthPage) {
      router.push("/");
    }
  }, [user, isAuthPage, router]);


  return (
    <div className="h-full">
      <Authenticator
        initialState={
          pathname.includes("registro")
            ? "signUp"
            : pathname.includes("recuperar-contrasena")
            ? "forgotPassword"
            : "signIn"
        }
        components={components}
        formFields={formFields}
      >
      </Authenticator>
    </div>
  );
};

export default Auth;
