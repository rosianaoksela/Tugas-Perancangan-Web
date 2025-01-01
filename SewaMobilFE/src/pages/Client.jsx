import React, {useRef} from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";
import {GrNext, GrPrevious} from "react-icons/gr";
import {AiFillStar} from "react-icons/ai";
import Martinus from "../assets/images/reviews/Bapak-Martinus.jpeg";
import Betty from "../assets/images/reviews/Ibu-Betty.jpeg";
import Lisa from "../assets/images/reviews/Ibu-Lisa.jpeg";
import Vicky from "../assets/images/reviews/Vicky.jpg";
import Sani from "../assets/images/reviews/Bapak-Sani.jpeg";
import Sari from "../assets/images/reviews/Ibu-Sari-Siregar.jpeg";

// Static reviews data
const reviewsData = [
    {
        customerImageUrl: Martinus,
        customerName: "Martinus",
        customerReview: "Renting was much easier than I expected!",
        customerStar: 5
    },
    {
        customerImageUrl: Betty,
        customerName: "Betty",
        customerReview: "I am very satisfied, I will use 'Rent a Car' again.",
        customerStar: 4
    },
    {
        customerImageUrl: Lisa,
        customerName: "Lisa",
        customerReview: "Sangat memuaskan!",
        customerStar: 5
    },
    {
        customerImageUrl: Vicky,
        customerName: "Vicky",
        customerReview: "Sangat membantu dengan adanya website ini",
        customerStar: 4
    },
    {
        customerImageUrl: Sani,
        customerName: "Sani",
        customerReview: "Excellent, 5 stars!",
        customerStar: 5
    },
    {
        customerImageUrl: Sari,
        customerName: "Sari Siregar",
        customerReview: "It was a nice experience",
        customerStar: 4
    }
];

const Client = () => {

    const sliderRef = useRef(null);

    const onPrevClick = () => {
        sliderRef.current.prev();
    };
    const onNextClick = () => {
        sliderRef.current.next();
    };

    const resultsRender = [];
    for (let i = 0; i < reviewsData.length; i += 2) {
        resultsRender.push(
            <Carousel.Item key={`review_carousel_${i}`} interval={5000}>
                <Carousel.Caption className="carousel-caption text-dark text-start">
                    <Row>
                    {
                        reviewsData.slice(i, i + 2)
                            .map((review, index) => (
                                <Col xs={6} key={`review_${i+index}`} className="d-flex align-items-stretch">
                                    <Card>
                                        <Card.Img variant="top" src={review.customerImageUrl} className="image-fluid h-100" height={'400px'} width={'200px'}/>
                                        <Card.Body>
                                            <Card.Title className="text-center">{review.customerName}</Card.Title>
                                            <Card.Text className="m-0">{review.customerReview}</Card.Text>
                                            <div className="review-star text-center">
                                                { Array.from({length: review.customerStar}).map((val, inx) => <AiFillStar key={`star_${inx}`} />) }
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                    }
                    </Row>
                </Carousel.Caption>
            </Carousel.Item>
        );
    }

    return (
        <div id="customer-reviews">
            <Container className="py-4">
                <Row className="mb-5">
                    <Col>
                        <h1 className="fs-1 text-center text-uppercase">What Our Customers Say</h1>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col xs={12} md={8}>
                        <Row>
                            <Col xs={2} className="position-relative">
                                <div className="position-absolute top-50">
                                    <Button variant="outline-dark" onClick={onPrevClick} className="primary-bg-color border-0 rounded-0" size="lg"><GrPrevious color="white"/></Button>
                                </div>
                            </Col>
                            <Col xs={8} className="p-0">
                                <Carousel ref={sliderRef}>
                                    {resultsRender}
                                </Carousel>
                            </Col>
                            <Col xs={2} className="position-relative">
                                <div className="position-absolute top-50">
                                    <Button variant="outline-dark" onClick={onNextClick} className="primary-bg-color border-0 rounded-0" size="lg"><GrNext color="white"/></Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Client;
