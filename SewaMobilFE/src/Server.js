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

function Server() {
  const handleClick = () => {
    window.open(
      "https://wa.me/6281278732817?text=Halo,%20saya%20tertarik%20untuk%20menyewa%20mobil",
      "_blank"
    );
  };
  // Backend Setup
  useEffect(() => {
    const startBackend = () => {
      const app = express();
      app.use(cors());
      app.use(express.json());

      // Database Connection
      const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "car_rental", // Change to your database name
      });

      db.connect((err) => {
        if (err) {
          console.error("Database connection failed:", err);
        } else {
          console.log("Connected to database");
        }
      });

      // API Endpoint to Fetch Cars
      app.get("/api/cars", (req, res) => {
        const sql = "SELECT id, brand, model_price, image FROM cars";
        db.query(sql, (err, results) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(results);
          }
        });
      });

      app.listen(5000, () => {
        console.log("Backend server running on http://localhost:5000");
      });
    };

    startBackend();
  }, []);

  return;
}

export default Server;
