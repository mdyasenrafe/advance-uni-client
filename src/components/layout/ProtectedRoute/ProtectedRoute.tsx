import React, { ReactNode } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { Navigate } from "react-router-dom";
import { useCurrentToken } from "../../../redux/features/auth/authSlice";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};
