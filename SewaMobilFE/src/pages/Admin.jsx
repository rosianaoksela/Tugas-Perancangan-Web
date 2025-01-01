import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Admin/Dashboard";
import SideNavbar from "./Admin/SideNavbar";

const Admin = () => {
  return (
    <div className="d-flex">
      <SideNavbar />
      {/* Main Content */}
      <div className="p-4 flex-grow-1" style={{ backgroundColor: "#f8f9fa" }}>
        <Dashboard />
      </div>
    </div>
  );
};
export default Admin;
