import { Children, ReactNode } from "react";
import { Route } from "react-router-dom";
import Login from "../../pages/Login";

interface AuthRouteProps {
  loggedIn: boolean;
  exact?: boolean;
  path: string;
  element: ReactNode;
  children?: ReactNode;
}

const AuthRoute = (props: AuthRouteProps) => {
  if (!props.loggedIn) {
    return <Route path="/login" element={<Login />} />;
  }

  return (
    <Route path={props.path} element={props.element}>
      {props.children}
    </Route>
  );
};

export default AuthRoute;
