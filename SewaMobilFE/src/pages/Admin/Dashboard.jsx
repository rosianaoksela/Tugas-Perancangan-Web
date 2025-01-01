import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Dashboard() {
  const data = [
    { month: "January", rented: 10, pending: 5 },
    { month: "February", rented: 20, pending: 10 },
    { month: "March", rented: 35, pending: 12 },
    { month: "April", rented: 50, pending: 14 },
    { month: "May", rented: 65, pending: 13 },
    { month: "June", rented: 85, pending: 15 },
  ];

  return (
    <div className="container-fluid">
      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center my-4">
        <h1 className="text-primary">Car Rental Dashboard</h1>
      </div>

      {/* Dashboard Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">Total Cars</h5>
              <p className="card-text display-6">120</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">Cars Rented</h5>
              <p className="card-text display-6">85</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning">
            <div className="card-body">
              <h5 className="card-title">Pending Returns</h5>
              <p className="card-text display-6">15</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <p className="card-text display-6">$35K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Graphs */}
      <div className="row">
        <div className="col-md-7">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Rental Trends</h5>
            <LineChart width={600} height={300} data={data}>
              <Line type="monotone" dataKey="rented" stroke="#007bff" />
              <Line type="monotone" dataKey="pending" stroke="#ffc107" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div></div>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Top Rentals</h5>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Toyota Corolla
                  <span className="badge bg-primary rounded-pill">32</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Honda Civic
                  <span className="badge bg-primary rounded-pill">28</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Ford Mustang
                  <span className="badge bg-primary rounded-pill">18</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  BMW X5
                  <span className="badge bg-primary rounded-pill">12</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
