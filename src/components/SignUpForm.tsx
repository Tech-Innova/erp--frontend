import "./styles/AuthForm.css";
import Logo from "../assets/images/logo.png";
import GoogleIcon from "../assets/icons/googleIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "./ui/Input";
import { TUserSignupRequest } from "@super_raptor911/erp-types";

import { api_getGoogleUserDetails, api_signupUser } from "../api/users";
import { useGoogleLogin } from "@react-oauth/google";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  const signup = useGoogleLogin({
    onSuccess: (codeResponse) => api_getGoogleUserDetails(codeResponse.access_token).then(res => console.log(res)),
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user: TUserSignupRequest = {
      name,
      username,
      email,
      password,
      createdBy: username,
    };
    const result = await api_signupUser(user);
    if (result) {
      nav("/login");
    }
  };

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <Link to="/">
            <img src={Logo} alt="logo" className="auth-logo" />
          </Link>
        </div>
        <div className="formSec">
          <form className="form" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Full Name"
              className="inputField"
              value={name}
              onChange={setName}
              required
            />
            <Input
              type="text"
              placeholder="Email"
              className="inputField"
              value={email}
              onChange={setEmail}
              required
            />

            <Input
              type="text"
              placeholder="Username"
              className="inputField"
              value={username}
              onChange={setUsername}
              required
            />

            <Input
              type="password"
              placeholder="Password"
              className="inputField"
              value={password}
              onChange={setPassword}
              required
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              className="inputField"
              value={password}
              onChange={setPassword}
              required
            />

            <input
              type="submit"
              value="Sign Up"
              className="inputFieldButton"
            ></input>
          </form>
          <p>or</p>
          <button className="googleAuth" onClick={() => signup()} >
            <img src={GoogleIcon} alt="google-icon" className="google-icon" />
            <div>Continue with Google</div>
          </button>
          <div className="signInOption">
            Already have an account ?{" "}
            <Link to="/login" className="blue">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
