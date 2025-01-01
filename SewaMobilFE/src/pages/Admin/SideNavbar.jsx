import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SideNavbar() {
  return (
    <nav className="bg-dark text-white vh-100" style={{ width: "250px" }}>
      <div className="p-3">
        <img
          src="https://awsimages.detik.net.id/community/media/visual/2020/10/26/logo-logo-pabrikan-mobil-otomotif-13.png?w=800"
          alt="Logo"
        />
        <h4 className="text-center text-primary">Rental Mobil Batam</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <a
              href="/admin"
              className="nav-link text-white rounded mb-2"
              style={{
                // backgroundColor: '#f0f0f0',
                color: '#333',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#212529'}
            >
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/admin/vehicles"
              className="nav-link text-white rounded mb-2"
              style={{
                // backgroundColor: '#f0f0f0',
                color: '#333',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#212529'}
            >
              Vehicles List
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/admin/help"
              className="nav-link text-white rounded mb-2"
              style={{
                // backgroundColor: '#f0f0f0',
                color: '#333',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#212529'}
            >
              Help
            </a>
          </li>
        </ul>
      </div>
      <div className="position-absolute bottom-0 p-5">
        <a href="/" className="btn btn-primary">
          Return to Client
        </a>
      </div>
    </nav>
  );
}

export default SideNavbar;