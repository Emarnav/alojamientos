import { Metadata } from "next";
import Residence from "./Residence";

export const metadata: Metadata = {
  title: "Detalles del Alojamiento | UCH-CEU",
  description: "Consulta pagos, contrato y detalles de tus alojamientos actuales.",
};

export default function Page() {
  return <Residence />;
}
