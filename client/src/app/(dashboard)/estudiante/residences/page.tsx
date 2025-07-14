import { Metadata } from "next";
import Residences from "./Residences";

export const metadata: Metadata = {
  title: "Mis Alojamientos | UCH-CEU",
  description: "Consulta y gestiona tus alojamientos actuales como estudiante.",
};

export default function Page() {
  return <Residences />;
}
