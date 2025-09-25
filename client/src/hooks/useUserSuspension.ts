import { useGetAuthUserQuery } from "@/state/api";

export const useUserSuspension = () => {
  const { data: user, isLoading } = useGetAuthUserQuery();
  
  const isSuspended = user?.userInfo?.isSuspended || false;
  const isPropietario = user?.userRole === "Propietario";
  
  return {
    isSuspended,
    isPropietario,
    shouldShowWarning: isPropietario && isSuspended,
    isLoading
  };
};