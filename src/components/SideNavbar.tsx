import React, { useState } from "react";
import "./styles/SideNavbar.css";
import Sidebar from "../assets/icons/sidebar.png";
import CloseSidebar from "../assets/icons/closeSidebar.png";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

interface SideNavbarProps {
  onDataChange: (newData: boolean) => void;
}

const SideNavbar = (props: SideNavbarProps) => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => {
    setSideBar(!sideBar);
    props.onDataChange(sideBar);
  };
  return (
    <div>
      <div className="bar" onClick={showSideBar}>
        <img className="sidebar" src={Sidebar} alt="=" />
      </div>
      <div className={sideBar ? "navMenuActive" : "navMenu"}>
        <div className="container-navbar">
          <div className="logo-section">
            <div>
              <img src={Logo} alt="erp" />
            </div>
            <div className="close-sidebar">
              <img
                src={CloseSidebar}
                alt="close-sidebar"
                onClick={showSideBar}
              />
            </div>
          </div>
          <div className="list">
            <Link to="/dashboard" className="title">
              Dashboard
            </Link>
            <Link to="/Admin" className="title">
              Administration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
