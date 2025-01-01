import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSyncAlt } from "react-icons/fa";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function VehicleListTable() {
  const [cars, setCars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actionType, setActionType] = useState("add"); // 'add' or 'edit'
  const [currentCar, setCurrentCar] = useState({
    id: "",
    brand_name: "",
    price: "",
    image: "",
    model_name: "",
  });

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cars");
        const data = await response.json();
        setCars(data); // Set the fetched cars to state
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCars();
  }, []); // Empty dependency array to fetch only once when the component mounts

  // Open modal for adding a new vehicle
  const handleAddVehicle = () => {
    setActionType("add");
    setCurrentCar({
      id: "",
      brand_name: "",
      price: "",
      image: "",
      model_name: "",
      name: "",
    });
    setShowModal(true);
  };

  // Open modal for editing an existing vehicle
  const handleEditVehicle = (car) => {
    setActionType("edit");
    setCurrentCar(car);
    setShowModal(true);
  };

  // Handle form submission for adding or editing vehicle
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (actionType === "add") {
      // POST request to add a new vehicle
      fetch("http://localhost:5000/api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentCar),
      })
        .then((response) => response.json())
        .then((data) => {
          setCars((prevCars) => [...prevCars, data]); // Add new car to the list
          setShowModal(false); // Close the modal
        })
        .catch((error) => console.error("Error adding car:", error));
    } else if (actionType === "edit") {
      // PUT request to update the vehicle
      fetch(`http://localhost:5000/api/cars/${currentCar.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentCar),
      })
        .then((response) => response.json())
        .then((updatedCar) => {
          setCars((prevCars) =>
            prevCars.map((car) => (car.id === updatedCar.id ? updatedCar : car))
          ); // Update the car in the list
          setShowModal(false); // Close the modal
        })
        .catch((error) => console.error("Error updating car:", error));
    }
  };

  // Handle delete vehicle action
  const handleDeleteVehicle = (carId) => {
    fetch(`http://localhost:5000/api/cars/${carId}`, {
      method: "DELETE",
    })
      .then(() => {
        setCars((prevCars) => prevCars.filter((car) => car.id !== carId)); // Remove car from the list
      })
      .catch((error) => console.error("Error deleting car:", error));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const fetchCars = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/cars");
      const data = await response.json();
      console.log(data);
      setCars(data);
    } catch (error) {
      console.error("Failed to fetch car data", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-3 text-primary">Vehicle List</h2>
      <Button variant="success" onClick={handleAddVehicle}>
        Add New Vehicle
      </Button>
      <Button variant="primary" onClick={fetchCars}>
        <FaSyncAlt />
        Refresh
      </Button>
      <Table striped bordered hover responsive>
        <thead className="bg-primary text-white">
          <tr>
            <th>#</th>
            <th>Brand Name</th>
            <th>Price</th>
            <th>Model Name</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={`car_${car.id}`}>
              <td>{index + 1}</td>
              {/* <td>{car.id}</td> */}
              <td>{car.brand_name}</td>
              <td>{formatPrice(car.price)}</td>
              <td>{car.model_name}</td>
              <td>
                <img
                  src={car.image}
                  alt={`${car.brand_name}`}
                  style={{ width: "100px", height: "auto" }}
                  className="img-thumbnail"
                />
              </td>
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => handleEditVehicle(car)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteVehicle(car.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Add/Edit Vehicle */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {actionType === "add" ? "Add New Vehicle" : "Edit Vehicle"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                type="text"
                id="brand_name"
                value={currentCar.brand_name}
                onChange={(e) =>
                  setCurrentCar({ ...currentCar, brand_name: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                id="price"
                value={currentCar.price}
                onChange={(e) =>
                  setCurrentCar({ ...currentCar, price: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                id="image"
                value={currentCar.image}
                onChange={(e) =>
                  setCurrentCar({ ...currentCar, image: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Model Name</Form.Label>
              <Form.Control
                type="text"
                id="model_name"
                value={currentCar.model_name}
                onChange={(e) =>
                  setCurrentCar({ ...currentCar, model_name: e.target.value })
                }
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {actionType === "add" ? "Add Vehicle" : "Update Vehicle"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VehicleListTable;
