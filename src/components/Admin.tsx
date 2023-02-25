import "./styles/Admin.css";
import { useSidebarStore } from "../store";
import Bin from "../assets/icons/bin.png";

const Admin = () => {
  const { sidebarOpen } = useSidebarStore();

  return (
    <div className={sidebarOpen ? "root-admin-expand" : "root-admin"}>
      <div className="admin-users-container">
        <div className="admin-users-header">
          <div className="admin-users-header-title"> Members</div>
        </div>
        <div className="admin-users-header-bar"></div>

        <div className="admin-users-list-container">
          <div className="admin-users-list-view">
            <div className="admin-users-list-headers">
              <div className="admin-users-list-headers-title">
                <div className="admin-users-list-header"> Username</div>
                <div className="admin-users-list-header"> Email Address</div>
                <div className="admin-users-list-header"> Full Name</div>
                <div className="admin-users-list-header"> Staff Status</div>
              </div>
              <div className="admin-users-list-header-bar"></div>
            </div>
            <div className="admin-users-list">
              {/*  */}
              <div className="admin-users-details">
              <div className="admin-users-end-bar"></div>
                <div className="admin-user-details">
                  <div className="admin-users-list-title"> johnlee</div>
                  <div className="admin-users-list-title">
                    johnlee@gmail.com
                  </div>
                  <div className="admin-users-list-title"> John Lee</div>
                  <div className="admin-users-list-title-status">
                    <select className="admin-users-list-status-button">
                      <option value="">Inactive</option>
                      <option value="Admin">Admin</option>
                      <option value="Admin">Staff</option>
                    </select>
                    <img
                      src={Bin}
                      alt="delete"
                      className="admin-users-list-delete"
                    />
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
