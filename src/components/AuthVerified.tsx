import { ReactNode } from "react";
import { useMainStore } from "../store";

const AuthVerified = ({ children }: { children: ReactNode }) => {
  const user = useMainStore((state) => state.user);

  return <>{children}</>;
};

export default AuthVerified;
