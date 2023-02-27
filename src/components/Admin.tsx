import "./styles/Admin.css";
import { useUIStore } from "../uiStore";
import Bin from "../assets/icons/bin.png";
import { useState } from "react";
import { useQuery } from "react-query";
import { api_listUsers } from "../api/users";
import { TUserAuthModel } from "@super_raptor911/erp-types";

const Admin = () => {
  const { sidebarOpen } = useUIStore();
  const [isActive, setIsActive] = useState(true);

  const handleActiveView = () => {
    setIsActive(true);
  };
  const handleInactiveView = () => {
    setIsActive(false);
  };

  const { isLoading, error, data } = useQuery("user_list", api_listUsers);

  return (
    <div className={sidebarOpen ? "root-admin-expand" : "root-admin"}>
      <div className="admin-users-container">
        <div className="admin-users-header">
          <div
            onClick={handleActiveView}
            className={
              isActive
                ? "admin-users-header-title-active"
                : "admin-users-header-title"
            }
          >
            {" "}
            Members
          </div>
          <div
            onClick={handleInactiveView}
            className={
              isActive
                ? "admin-users-header-title-inactive"
                : "admin-users-header-title-active-inactive"
            }
          >
            Inactive
          </div>
        </div>
        <div className="admin-users-header-bar"></div>
        {/*  container for members/staffs*/}
        {isActive ? <ActiveMembers /> : <InactiveMembers />}
        {/* end of staffs */}
      </div>
    </div>
  );
};

const MemberRow = (user: TUserAuthModel) => {
  return (
    <div className="admin-users-details">
            <div className="admin-users-end-bar"></div>
            <div className="admin-user-details">
              <div className="admin-users-list-title"> johnlee</div>
              <div className="admin-users-list-title">johnlee@gmail.com</div>
              <div className="admin-users-list-title"> John Lee</div>
              <div className="admin-users-list-title-status">
                <select className="admin-users-list-status-button">
                  <option value="">Staff</option>
                  <option value="Admin">Admin</option>
                  <option value="Admin">Super Admin</option>
                </select>

                {/* <img
                  src={Bin}
                  alt="delete"
                  className="admin-users-list-delete"
                /> */}
              </div>
              <select className="admin-users-list-status-button">
                <option value="">Active</option>
                <option value="Admin">Inactive</option>
              </select>
            </div>
          </div>
  )
}

const ActiveMembers = () => {
  return (
    <div className="admin-users-list-container">
      <div className="admin-users-list-view">
        <div className="admin-users-list-headers">
          <div className="admin-users-list-headers-title">
            <div className="admin-users-list-header"> Username</div>
            <div className="admin-users-list-header"> Email Address</div>
            <div className="admin-users-list-header"> Full Name</div>
            <div className="admin-users-list-header"> Permission Status</div>
            <div className="admin-users-list-header"> Verification Status</div>
          </div>
          <div className="admin-users-list-header-bar"></div>
        </div>
        <div className="admin-users-list">
          {/* User list to map */}
          <MemberRow email="vyshnav" name="Vyshnav" username = "vysh" password = "1234" id= {20} is_verified = {true} access_level={2} created_by="13554"/>
          {/* end of user list to map*/}
        </div>
      </div>
    </div>
  );
};

const InactiveMembers = () => {
  return (
    <div className="admin-inactive-list-container">
      {/*  container for members/staffs*/}
      <div className="admin-users-list-container">
        <div className="admin-users-list-view">
          <div className="admin-users-list-headers">
            <div className="admin-users-list-headers-title">
              <div className="admin-users-list-header"> Username</div>
              <div className="admin-users-list-header"> Email Address</div>
              <div className="admin-users-list-header"> Full Name</div>
              <div className="admin-users-list-header"> Permission Status</div>
            </div>
            <div className="admin-users-list-header-bar"></div>
          </div>
          <div className="admin-users-list">
            {/* User list to map */}
            <MemberRow email="vyshnav" name="Vyshnav" username = "vysh" password = "1234" id= {20} is_verified = {true} access_level={2} created_by="13554"/>
            {/* end of user list to map*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
