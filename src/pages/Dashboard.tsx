import SideNavbar from "../components/SideNavbar";
import DashboardHeader from "../components/DashboardHeader";
import { Outlet, Route, Routes } from "react-router-dom";
import Admin from "../components/Admin";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <Outlet />
    </div>
  );
};

export default Dashboard;
