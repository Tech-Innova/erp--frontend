import "../components/styles/Home.css";
import { Link } from "react-router-dom";
import HomeBody from "../assets/images/HomeBody.png"

const Home = () => {
  return (
    <div className="home-root">
      <div className="home-container">
      <div className="home-header">
        <div className="home-header-left">
          <img src="" alt="Logo" />
          <div className="home-header-title">About Us</div>
          <div className="home-header-title">Features</div>
          <div className="home-header-title">Resources</div>
          <div className="home-header-title">Pricing</div>
        </div>
        <div className="home-header-right">
          <div className="home-header-title">Contact Sales</div>
          <Link to='/login' className="home-header-title">Sign In</Link>
          <button className="home-header-button">Start for Free</button>
        </div>
      </div>

      <div className="home-body-container">
        <div className="home-body-container-left">
          <div className="home-body-title">Streamline resource planning effortlessly</div>
          <div className="home-body-description">Discover the power of balanced workloads and optimized productivity with our resource planning</div>
          <div className="home-body-buttons">
            <button className="home-body-getstarted">
              Get Started
            </button>   
            <button className="home-body-contactus">
              Contact Us
            </button>
          </div>
        </div>
        <div className="home-body-container-right">
          <img src={HomeBody}alt="image" className="home-body-image" />
        </div>

      </div>
      </div>

    </div>
  );
};

export default Home;
