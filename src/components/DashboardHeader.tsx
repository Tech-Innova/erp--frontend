import React, { useState } from "react";
import SideNavbar from "./SideNavbar";
import "./styles/DashboardHeader.css";
import Help from "../assets/icons/help-circle.png";
import Bell from "../assets/icons/bell.png";
import DefaultDp from "../assets/images/def-dp.png";
import { useUIStore } from "../uiStore";
import { useMainStore } from "../store";
import LogoutHeader from "./LogoutHeader";

const roles = ["Super Admin", "Admin", "Staff"];
const DashboardHeader = () => {
  const { sidebarOpen } = useUIStore();
  const user = useMainStore((state) => state.user);
  const [logActive, setLogActive] = useState(false)

  const handleLogout = () =>{
    setLogActive(!logActive)
  }
  return (
    <div className="root-dash-header">
      <div className="dash-header">
        <div className="dash-header-left">
          <div>
            <SideNavbar />
          </div>
          <div
            className={
              sidebarOpen ? "dash-header-title-expand" : "dash-header-title"
            }
          >
            Dashboard
          </div>
        </div>
        <div className="dash-header-right">
          <div>
            <input
              type="text"
              className="dash-header-search"
              placeholder="Search report, analytics or anything"
            />
          </div>
          <div className="dash-header-help-sec">
            <img src={Help} alt="h" className="dash-header-help" />
          </div>
          <div className="dash-header-noti-sec">
            
            <img src={Bell} alt="n" className="dash-header-noti" />
          </div>

          <div className="dash-header-user" onClick={handleLogout}>
          <div className={logActive ? "dash-header-user-logout":"dash-header-user-logout-active"}>
            <LogoutHeader />
          </div>
          <img src={DefaultDp} alt="dp" className="dash-header-dp" />
          
            
            <div>
              <div className="dash-header-username">{user?.username} </div>
              <div className="dash-header-position">
                {user && roles[user.access_level]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
