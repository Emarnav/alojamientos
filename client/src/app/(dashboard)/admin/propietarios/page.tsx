import { Metadata } from "next";
import Propietarios from "./Propietarios";

export const metadata: Metadata = {
  title: "Gestión de Propietarios | UCH-CEU",
  description: "Consulta y gestiona los propietarios registrados en la plataforma.",
};

export default function Page() {
  return <Propietarios />;
}