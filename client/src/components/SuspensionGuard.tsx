"use client";

import { useUserSuspension } from "@/hooks/useUserSuspension";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/Loading";

interface SuspensionGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const SuspensionGuard: React.FC<SuspensionGuardProps> = ({ 
  children, 
  redirectTo = "/propietario/alojamientos" 
}) => {
  const { shouldShowWarning, isLoading } = useUserSuspension();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && shouldShowWarning) {
      router.push(redirectTo);
    }
  }, [shouldShowWarning, isLoading, router, redirectTo]);

  if (isLoading) {
    return <Loading />;
  }

  if (shouldShowWarning) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default SuspensionGuard;