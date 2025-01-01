const express = require("express");

const mysql = require("mysql");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "car_rental", // Change to your database name
});

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

// API Endpoint to Fetch Cars
app.get("/api/cars", (req, res) => {
  const sql =
    "SELECT id, brand_name, model_name, price, image FROM vehicles";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Add a new car
app.post("/api/cars", (req, res) => {
  const { brand_name, price, image, model_name } = req.body;
  const query = "INSERT INTO vehicles (brand_name, price, image, model_name) VALUES (?, ?, ?, ?)";

  db.query(query, [brand_name, price, image, model_name], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Failed to add car" });
      return;
    }
    res.status(201).json({
      id: result.insertId,
      brand_name,
      price,
      image,
    });
  });
});

// Update a car's details
app.put("/api/cars/:id", (req, res) => {
  const { id } = req.params;
  const { brand_name, price, image, model_name } = req.body;
  const query =
    "UPDATE vehicles SET brand_name = ?, price = ?, image = ?, model_name = ? WHERE id = ?";

  db.query(query, [brand_name, price, image, model_name, id], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Failed to update car" });
      return;
    }
    res.json({
      id,
      brand_name,
      price,
      image,
    });
  });
});

// Delete a car
app.delete("/api/cars/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM vehicles WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Failed to delete car" });
      return;
    }
    res.status(200).json({ message: "Car deleted successfully" });
  });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
