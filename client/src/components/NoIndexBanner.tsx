"use client";

import React from "react";

/**
 * Componente de banner para recordar que el sitio no debe ser indexado
 * Solo visible en desarrollo para los administradores
 */
const NoIndexBanner = () => {
  // Solo mostrar en desarrollo
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-red-600 text-white text-center py-2 text-sm font-semibold">
      SITIO NO INDEXADO - En desarrollo - No visible en buscadores
    </div>
  );
};

export default NoIndexBanner;