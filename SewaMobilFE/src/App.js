import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa";

import "./WA.css";
import "./App.css";
import "./App.scss";

import About from "./pages/About";
import Client from "./pages/Client";
import Services from "./pages/Services";
import Mobil from "./pages/Mobil";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdminVehicles from "./pages/Admin/AdminVehicles";
import AdminHelp from "./pages/Admin/AdminHelp";

function App() {
  const handleClick = () => {
    window.open(
      "https://wa.me/6282174670778?text=Halo,%20saya%20tertarik%20untuk%20menyewa%20mobil",
      "_blank"
    );
  };
  return (
    <Router>
      <div className="App">
        <div className="whatsapp-icon" onClick={handleClick}>
          <FaWhatsapp size={60} color="#25D366" />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/client" element={<Client />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Mobil" element={<Mobil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/vehicles" element={<AdminVehicles />} />
          <Route path="/admin/help" element={<AdminHelp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
