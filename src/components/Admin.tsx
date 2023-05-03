import "./styles/Admin.css";
import { useUIStore } from "../uiStore";
import Bin from "../assets/icons/bin.png";
import { useState } from "react";
import { useQuery } from "react-query";
import {
  api_listUsers,
  api_modifyUserPrivilege,
  api_modifyUserVerificationStatus,
} from "../api/users";
import { TUserAuthModel } from "@super_raptor911/erp-types";
import Loader from "./Loader";

const Admin = () => {
  const { sidebarOpen } = useUIStore();
  const [isActive, setIsActive] = useState(true);

  const handleActiveView = () => {
    setIsActive(true);
  };
  const handleInactiveView = () => {
    setIsActive(false);
  };

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

interface IMemberRowProps {
  user: TUserAuthModel;
  refetch: () => any;
}

const MemberRow = ({ user, refetch }: IMemberRowProps) => {
  const handleAccessLevelChange = async (value: string) => {
    try {
      const result = await api_modifyUserPrivilege({
        user_id: user.id,
        value: parseInt(value),
      });

      if (!result) throw "Something went wrong";
      refetch();
    } catch (e) {
      console.error("error::handleAccessLevelChange", e);
    }
  };

  const handleVerificationChange = async (value: string) => {
    try {
      const result = await api_modifyUserVerificationStatus({
        user_id: user.id,
        value: value === "1",
      });

      if (!result) throw "Something went wrong";
      refetch();
    } catch (e) {
      console.error("error::handleAccessLevelChange", e);
    }
  };

  return (
    <div className="admin-users-details">
      <div className="admin-users-end-bar"></div>
      <div className="admin-user-details">
        <div className="admin-users-list-title"> {user.username}</div>
        <div className="admin-users-list-title">{user.email}</div>
        <div className="admin-users-list-title"> {user.name}</div>
        <div className="admin-users-list-title-status">
          <select
            className="admin-users-list-status-button"
            value={user.access_level}
            onChange={(e) => handleAccessLevelChange(e.target.value)}
          >
            <option value="2">Staff</option>
            <option value="1">Admin</option>
            <option value="0">Super Admin</option>
          </select>
        </div>
        <select
          className="admin-users-list-status-button"
          value={user.is_verified ? 1 : 0}
          onChange={(e) => handleVerificationChange(e.target.value)}
        >
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>
      </div>
    </div>
  );
};

const ActiveMembers = () => {
  const { isLoading, error, data, refetch } = useQuery(
    "user_list",
    api_listUsers
  );
  if (isLoading) return <div><Loader /></div>;

  const activeMembers = data?.filter((user) => user.is_verified);

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
          {activeMembers?.map((member) => (
            <MemberRow user={member} refetch={refetch} key={member.id} />
          ))}
          {/* end of user list to map*/}
        </div>
      </div>
    </div>
  );
};

const InactiveMembers = () => {
  const { isLoading, error, data, refetch } = useQuery(
    "user_list",
    api_listUsers
  );
  if (isLoading) return <div>Loading...</div>;

  const inActiveMembers = data?.filter((user) => !user.is_verified);

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
            <div className="admin-users-list-header"> Verification Status</div>

            </div>
            <div className="admin-users-list-header-bar"></div>
          </div>
          <div className="admin-users-list">
            {inActiveMembers?.map((member) => (
              <MemberRow user={member} refetch={refetch} key={member.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
