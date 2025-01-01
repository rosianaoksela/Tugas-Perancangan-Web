import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import AboutImage from '../assets/images/about-image.png'


const About = () => {
    return (
    <div id="about-section">
     <Container>
        <Row className="mt-1 mb-2">
          <Col xs={{span:12, order:"last"}} md={{span:6, order:"first"}}>
            <div className="image_iman">
                <img src={AboutImage} className="about_img" />
            </div>
          </Col>
          <Col xs={{span:12, order:"first"}} md={{span:6, order:"last"}}>
            <div className="mt-2 mb-5">
              <h1 className="text-uppercase fs-1 fw-600">
                  About <span className="primary-color">Us</span>
              </h1>
              <p className="about-text fs-5 m-0">
              Selamat datang di layanan sewa mobil dan motor Rosiana Oksela Nainggolan, solusi transportasi terbaik untuk perjalanan Anda! Kami bangga menjadi penyedia kendaraan yang handal, nyaman, dan terjangkau untuk berbagai kebutuhan, mulai dari perjalanan pribadi hingga keperluan bisnis.
              </p>
            </div>
          </Col>
        </Row>
     </Container>
    </div>
    );
    };
    export default About;