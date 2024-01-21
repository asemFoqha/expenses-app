import { FC } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

interface Props {
  authenticated: boolean;
  element: React.ReactNode;
  path: string;
}

const ProtectedRoute: FC<Props> = ({ authenticated }) => {
  if (!authenticated) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoute;
