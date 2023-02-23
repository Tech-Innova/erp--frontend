import "./styles/AuthForm.css";
import Logo from "../assets/images/logo.png";
import GoogleIcon from "../assets/icons/googleIcon.png";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <Link to="/">
            <img src={Logo} alt="logo" className="auth-logo" />
          </Link>
        </div>
        <div className="formSec">
          <form className="form">
            <input
              type="text"
              placeholder="Full Name"
              className="inputField"
            ></input>
            <input
              type="text"
              placeholder="Email"
              className="inputField"
            ></input>
            <input
              type="text"
              placeholder="Username"
              className="inputField"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="inputField"
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              className="inputField"
            ></input>
            <input
              type="submit"
              value="Sign Up"
              className="inputFieldButton"
            ></input>
          </form>
          <p>or</p>
          <button className="googleAuth">
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
