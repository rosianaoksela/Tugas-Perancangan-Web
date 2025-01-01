import React, {useState} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import Swal from "sweetalert2";

const Contact = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({});

    const handleFormChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleContactSubmit = event => {
        event.preventDefault();

        setIsLoading(true);

        // Simulate sending a message via WhatsApp
        const whatsappLink = `https://wa.me/+6282174670778?text=Hello, my name is ${formData.name}. My email is ${formData.email} and my phone number is ${formData.phone}. Here is my message: ${formData.message}`;
        
        window.open(whatsappLink, '_blank');

        setIsLoading(false);

        Swal.fire({
            title: "Good job!",
            text: "Your message has been sent via WhatsApp!",
            icon: "success"
        });
    };

    return (
    <div id="contact-section">
        <Container className="pt-4">
            <Row className="mb-5">
                <Col>
                    <h1 className="fs-1 text-center text-uppercase mt-5">Hubungi Kami</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="secondary-bg-color py-5 rounded-top">
                        <Row className="justify-content-center">
                            <Col xs={8} className="text-center">
                                {
                                    !isLoading
                                    ?
                                        <Form onSubmit={handleContactSubmit}>
                                            <Form.Control type="text" name="name" placeholder="Name" className="mb-2" onChange={handleFormChange} required={true}/>
                                            <Form.Control type="email" name="email" placeholder="Email" className="mb-2" onChange={handleFormChange} required={true}/>
                                            <Form.Control type="tel" name="phone" placeholder="Phone Number" className="mb-2" onChange={handleFormChange} required={true}/>
                                            <Form.Control as="textarea" name="message" rows={3} placeholder="Message" className="mb-2" onChange={handleFormChange} required={true}/>
                                            <div className="d-grid">
                                                <Button variant="secondary" className="border-0 py-2 primary-bg-color" type="submit">SEND</Button>
                                            </div>
                                        </Form>
                                    :
                                        <p>Loading...</p>
                                }
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Contact;
