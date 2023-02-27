import React from "react";
import { useNavigate } from "react-router-dom";
import { useMainStore } from "../store";

const LogoutHeader = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    useMainStore.getState().setIsSignedIn(null);
    useMainStore.getState().setJwtToken("");
    navigate("/");
  };

  return (
    <div className="logout-header-root">
      <div className="logout-header-box">
        <div className="logout-header-title" onClick={handleLogout}>
          Log Out
        </div>
      </div>
    </div>
  );
};

export default LogoutHeader;
