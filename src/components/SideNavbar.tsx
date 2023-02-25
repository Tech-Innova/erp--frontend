import React, { useState } from "react";
import "./styles/SideNavbar.css";
import Sidebar from "../assets/icons/sidebar.png";
import CloseSidebar from "../assets/icons/closeSidebar.png";
import Logo from "../assets/images/logo.png";
import { Link} from "react-router-dom";
import { useSidebarStore } from '../store'

const SideNavbar = () => {

  const { sidebarOpen, setSidebarOpen } = useSidebarStore();

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen)
  };

  return (
    <div>
      <div className="bar" onClick={handleSidebarToggle}>
        <img className="sidebar-sidenav" src={Sidebar} alt="=" />
      </div>
      <div className={sidebarOpen ? "navMenuActive" : "navMenu"}>
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
                onClick={handleSidebarToggle}
              />
            </div>
          </div>
          <div className="side-nav-list">
            <Link to="/dashboard" className="side-nav-title">
              Dashboard
            </Link>
            <Link to="/dashboard/admin" className="side-nav-title">
              Administration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
