import React from "react";
import LoginForm from "../components/LoginForm";
import "../components/styles/Login.css";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const secret: string = import.meta.env.VITE_GOOGLE_SECRET;

const Login = () => {
  
  return (
    <div className="root">
      <GoogleOAuthProvider clientId={secret}>
        <LoginForm />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
