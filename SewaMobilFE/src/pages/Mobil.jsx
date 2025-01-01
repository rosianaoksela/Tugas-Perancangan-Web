import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

const Mobil = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [cars, setCars] = useState([]);

    // Fetch Data from API
    useEffect(() => {
        const fetchCars = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:5000/api/cars');
                const data = await response.json();
                console.log(data)
                setCars(data);
            } catch (error) {
                console.error("Failed to fetch car data", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCars();
    }, []);

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(price);
      };

    return (
        <div id="car-offers" style={{ clear: "both" }}>
            <Container className="py-4">
                <Row className="mb-5">
                    <Col>
                        <h1 className="fs-1 text-center text-uppercase">Our Best Offers</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        isLoading ? (
                            <p>Loading offers...</p>
                        ) : (
                            cars.map((car) => (
                                <Col xs={6} md={4} className="py-2" key={`offer_${car.id}`}>
                                    <div className="gallery-box p-2">
                                        <div className="gallery-img">
                                            <LazyLoadImage
                                                src={car.image}
                                                className="img-fluid h-100"
                                                effect="blur"
                                                height={'300px'}
                                            />
                                        </div>
                                        <div className="gallery-content text-center">
                                            <h3 className="fs-4 fw-600 p-0">
                                                {car.brand_name}
                                            </h3>
                                            <p className="fs-5 fw-500 m-0 pt-1 pb-3 primary-color">
                                                {formatPrice(car.price)}
                                            </p>
                                            <div className="d-grid pb-2">
                                                <Link to={`/cars/${car.brand_name}/${car.price}/${car.id}`}>
                                                    <Button variant="primary rent-now-button primary-bg-color border-0 rounded-1 px-4 fw-bold">Rent Now</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Mobil;
