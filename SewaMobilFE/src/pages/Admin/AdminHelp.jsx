import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Vehicles from "./Vehicles";
import SideNavbar from "./SideNavbar";
import HelpPage from "./Help";

const AdminVehicles = () => {
  return (
    <div className="d-flex">
      <SideNavbar />
      {/* Main Content */}
      <div className="p-4 flex-grow-1" style={{ backgroundColor: "#f8f9fa" }}>
        <HelpPage />
      </div>
    </div>
  );
};
export default AdminVehicles;
