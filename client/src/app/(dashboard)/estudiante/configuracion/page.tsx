import { Metadata } from "next";
import TenantSettings from "./TenantSettings";

export const metadata: Metadata = {
  title: "Configuración del perfil | UCH-CEU",
  description: "Edita tus datos personales como estudiante.",
};

export default function Page() {
  return <TenantSettings />;
}
