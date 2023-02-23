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
        <img className="sidebar-sidenav" src={Sidebar} alt="=" />
      </div>
      <div className={sideBar ? "navMenuActive" : "navMenu"}>
        <div className="container-navbar">
          <div className="logo-section">
            <div>
              <img src={Logo} alt="erp" className="navbar-logo" />
            </div>
            <div className="close-sidebar">
              <img
                src={CloseSidebar}
                alt="close-sidebar"
                className="close-sidebar"
                onClick={showSideBar}
              />
            </div>
          </div>
          <div className="side-nav-list">
            <Link to="/dashboard" className="side-nav-title">
              Dashboard
            </Link>
            <Link to="/dashboard" className="side-nav-title">
              Administration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
