import "./styles/AuthForm.css";
import Logo from "../assets/images/logo.png";
import GoogleIcon from "../assets/icons/googleIcon.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
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
          <form className="form">
            <input
              type="text"
              placeholder="Email or Username"
              className="inputField"
            ></input>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="inputField"
              ></input>
              <div className="forgetPassword">Forget Password ?</div>
            </div>
            <input
              type="submit"
              value="Sign In"
              className="inputFieldButton"
            ></input>
          </form>
          <p>or</p>
          <button className="googleAuth">
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
