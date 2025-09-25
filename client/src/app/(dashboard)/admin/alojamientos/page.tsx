import { Metadata } from "next";
import Properties from "./Properties";

export const metadata: Metadata = {
  title: "Gestión de Alojamientos | UCH-CEU",
  description: "Consulta y gestiona los alojamientos pendientes de revisión y los ya aprobados.",
};

export default function Page() {
  return <Properties />;
}
