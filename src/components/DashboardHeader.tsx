import React, { useState } from "react";
import SideNavbar from "./SideNavbar";
import "./styles/DashboardHeader.css";

const DashboardHeader = () => {
  const [dashTitle, setDashTitle] = useState(true);

  const showDashTitle = (boolValue: boolean) => {
    setDashTitle(boolValue);
  };
  return (
    <div className="root-dash-header">
      <div className="dash-header">
        <div className="dash-header-left">
          <div >
            <SideNavbar onDataChange={showDashTitle} />
          </div>
          <div
            className={
              dashTitle ? "dash-header-title" : "dash-header-title-expand"
            }
          >
            Dashboard
          </div>
        </div>
        <div className="dash-header-right">
          <div className="dash-header-username">Julian Wah</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
