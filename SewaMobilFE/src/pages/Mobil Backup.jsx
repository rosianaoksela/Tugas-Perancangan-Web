import React, {useState, useEffect} from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Avanza from "../assets/images/vehicles/avanza.png";
import Brio from "../assets/images/vehicles/brio.png";
import Vario from "../assets/images/vehicles/motor-vario.png";

const Mobil = () => {

    const [isLoading, setIsLoading] = useState(false);
    
    // Static data for brands, models, and cars
    const staticBrands = {
        1: "Avanza",
        2: "Brio",
        3: "Vario 160",
    };

    const staticModels = {
        1: { brandId: 1, models: { 1: "Rp. 250.000,-", 2: "Camry" } },
        2: { brandId: 2, models: { 1: "Rp. 250.000,-", 2: "Accord" } },
        3: { brandId: 3, models: { 1: "Rp. 100.000,-", 2: "3 Series" } },
    };

    const staticCars = {
        1: { brandId: 1, modelId: 1, carCount: 3, image: Avanza },
        2: { brandId: 2, modelId: 1, carCount: 2, image: Brio },
        3: { brandId: 3, modelId: 1, carCount: 5, image: Vario },
    };

    const [cars, setCars] = useState(null);
    const [brands, setBrands] = useState(null);
    const [models, setModels] = useState(null);

    useEffect(() => {
        // Simulate fetching data (replace Firebase fetching)
        setBrands(staticBrands);
        setModels(staticModels);
        setCars(staticCars);
    }, []);

    return (
        <div id="car-offers" style={{clear: "both"}}>
            <Container className="py-4">
              <Row className="mb-5">
                <Col>
                    <h1 className="fs-1 text-center text-uppercase">Our Best Offers</h1>
                </Col>
              </Row>
                <Row>
                    {
                        cars && brands && models
                        ?
                            Object.entries(cars)
                                .filter(([key, value]) => value.carCount > 0)
                                .map(([key, value]) => {

                                let brand = brands[value.brandId];
                                let model = Object.values(models).find(i => i.brandId === value.brandId).models[value.modelId];

                                return (
                                    <Col xs={6} md={4} className="py-2" key={`offer_${key}`}>
                                        <div className="gallery-box p-2">
                                            <div className="gallery-img">
                                                <LazyLoadImage
                                                    src={value.image}
                                                    className="img-fluid h-100"
                                                    effect="blur"
                                                    height={'300px'}
                                                />
                                            </div>
                                            <div className="gallery-content text-center">
                                                <h3 className="fs-4 fw-600 p-0">
                                                    {brand}
                                                </h3>
                                                <p className="fs-5 fw-500 m-0 pt-1 pb-3 primary-color">
                                                    {model}
                                                </p>
                                                <div className="d-grid pb-2">
                                                    <Link to={`/cars/${brand}/${model}/${key}`}>
                                                        <Button variant="primary rent-now-button primary-bg-color border-0 rounded-1 px-4 fw-bold">Rent Now</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    )
                                }
                            )
                        :
                            <p>Loading offers...</p>
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Mobil;
