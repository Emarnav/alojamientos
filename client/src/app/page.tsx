import { Metadata } from "next";
import Home from "./(nondashboard)/home/Home";

export const metadata: Metadata = {
  title: "Sitio en Desarrollo",
  description: "Este sitio web está actualmente en desarrollo y no está disponible públicamente.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
      nosnippet: true,
    },
  },
};
export default function Page() {
  return <Home />;
}
