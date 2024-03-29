import "./styles/AuthForm.css";
import Logo from "../assets/images/logo.png";
import GoogleIcon from "../assets/icons/googleIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "./ui/Input";
import {
  TUserLoginRequest,
  TUserOauthRequest,
} from "@super_raptor911/erp-types";
import {
  api_loginUser,
  api_getGoogleUserDetails,
  api_loginUserOauth,
} from "../api/users";
import { useMainStore } from "../store";
import { useGoogleLogin } from "@react-oauth/google";

const LoginForm = () => {
  const user = useMainStore((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setSignedIn = useMainStore((state) => state.setIsSignedIn);
  const nav = useNavigate();

  useEffect(() => {
    if (user) {
      nav("/dashboard");
    }
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) =>
      api_getGoogleUserDetails(codeResponse.access_token).then((res) =>
        handleGoogleLogin(res)
      ),
  });

  const handleGoogleLogin = async (cred: any) => {
    const user: TUserOauthRequest = {
      name: cred.name,
      username: cred.given_name + "_" + cred.family_name,
      email: cred.email,
      provider: "google",
      createdBy: cred.given_name + "_" + cred.family_name,
    };
    const result = await api_loginUserOauth(user);
    if (result) {
      setSignedIn(result);
      nav("/dashboard");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user: TUserLoginRequest = {
      username,
      password,
    };

    const result = await api_loginUser(user);
    setSignedIn(result);

    !result && alert("Failed to signin");
    result && nav("/dashboard");
  };

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="auth-logo-div">
            <Link to="/">
              <img src={Logo} alt="logo" className="auth-logo" />
            </Link>
          </div>
        </div>
        <div className="formSec">
          <form className="form" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Username"
              className="inputField"
              value={username}
              onChange={setUsername}
            />
            <div>
              <Input
                type="password"
                placeholder="Password"
                className="inputField"
                value={password}
                onChange={setPassword}
              />
              <div className="forgetPassword">Forget Password ?</div>
            </div>
            <input type="submit" value="Sign In" className="inputFieldButton" />
          </form>
          <p>or</p>
          <button className="googleAuth" onClick={() => login()}>
            <img src={GoogleIcon} alt="google-icon" className="google-icon" />
            <div>Continue with Google</div>
          </button>
          <div className="signupOption">
            Dont have an account ?{" "}
            <Link to="/register" className="blue">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
