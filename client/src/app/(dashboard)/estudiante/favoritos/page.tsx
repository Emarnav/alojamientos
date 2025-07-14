import { Metadata } from "next";
import Favorites from "./Favorites";

export const metadata: Metadata = {
  title: "Alojamientos Favoritos | UCH-CEU",
  description: "Consulta y gestiona los alojamientos que has guardado como favoritos.",
};

export default function Page() {
  return <Favorites />;
}
