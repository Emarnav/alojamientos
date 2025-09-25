import { Metadata } from "next";
import { Suspense } from "react";
import SearchPage from "./SearchPage"; 

export const metadata: Metadata = {
  title: "Búsqueda de Alojamiento | UCH-CEU",
  description: "Encuentra el alojamiento perfecto para tu vida universitaria.",
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPage />
    </Suspense>
  );
}
