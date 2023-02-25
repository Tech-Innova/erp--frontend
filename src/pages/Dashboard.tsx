import DashboardHeader from "../components/DashboardHeader";
import { Outlet, Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <Outlet />
    </div>
  );
};

export default Dashboard;
