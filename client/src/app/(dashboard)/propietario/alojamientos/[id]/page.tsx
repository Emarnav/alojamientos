import { Metadata } from "next";
import UpdateProperty from "./UpdateProperty";
import SuspensionGuard from "@/components/SuspensionGuard";

export const metadata: Metadata = {
  title: "Gestión de Estudiantes | Propietario | UCH-CEU",
  description: "Consulta los estudiantes, contratos y pagos de este alojamiento.",
};

export default function Page() {
  return (
    <SuspensionGuard>
      <UpdateProperty />
    </SuspensionGuard>
  );
}
