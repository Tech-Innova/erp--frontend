import "./styles/AuthForm.css";
import Logo from "../assets/images/logo.png";
import GoogleIcon from "../assets/icons/googleIcon.png";

const SignUpForm = () => {
  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <img src={Logo} alt="logo" className="logo" />
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
            <img src={GoogleIcon} alt="google-icon" />
            <div>Continue with Google</div>
          </button>
          <div className="signInOption">
            Already have an account ? <span className="blue">Sign In</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
