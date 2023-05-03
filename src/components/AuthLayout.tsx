import { Navigate, Outlet } from "react-router-dom";
import PermissionDenied from "../pages/PermissionDenied";
import { useMainStore } from "../store";

const AuthLayout = () => {
  const user = useMainStore((state) => state.user);
  const twoFactor = useMainStore((state) => state.twoFactorAuth);

  if (user) {
    const isAuthenticated = user.is_verified;
    return isAuthenticated ? <Outlet /> : <PermissionDenied />;
  }
  return <Navigate to={"/login"} replace />;
};

export default AuthLayout;
