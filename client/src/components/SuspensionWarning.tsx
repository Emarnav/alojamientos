"use client";

import { AlertTriangle, UserX } from "lucide-react";
import { useGetAuthUserQuery } from "@/state/api";

const SuspensionWarning = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const motivoSuspension = authUser?.userInfo?.motivoSuspension;

  return (
    <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6 shadow-lg">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="bg-red-100 p-3 rounded-full">
            <UserX className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-bold text-red-800">
              Cuenta Suspendida
            </h3>
          </div>
          <div className="text-red-700 space-y-2">
            <p className="text-base font-medium">
              Tu cuenta ha sido suspendida por un administrador.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-4">
              <li><strong>Tus alojamientos no son visibles</strong> para los estudiantes</li>
              <li>No puedes crear nuevos alojamientos</li>
              <li>No puedes editar alojamientos existentes</li>
              <li><strong>Importante:</strong> Una vez que tu cuenta sea reactivada, deberás volver a publicar manualmente tus alojamientos suspendidos</li>
              <li>Contacta con el administrador para más información</li>
            </ul>
          </div>
          {motivoSuspension && (
            <div className="mt-4">
              <div className="bg-red-100 border border-red-200 rounded-md p-3">
                <p className="text-sm text-red-800 font-medium">
                  <strong>Motivo de la suspensión:</strong>
                </p>
                <p className="text-sm text-red-700 mt-1">
                  {motivoSuspension}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuspensionWarning;