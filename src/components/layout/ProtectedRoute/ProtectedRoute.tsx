import React, { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Navigate } from "react-router-dom";
import {
  TUser,
  logout,
  useCurrentToken,
} from "../../../redux/features/auth/authSlice";
import { verifyToken } from "../../../utils/verifyToken";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: string | undefined;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  role,
}) => {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  let user;

  if (token) {
    user = verifyToken(token) as TUser;
  }

  if (role && user?.role !== role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};
