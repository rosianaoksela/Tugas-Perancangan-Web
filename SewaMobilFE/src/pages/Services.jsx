import React from 'react';

import {Container, Row, Col} from "react-bootstrap";

import {AiOutlineSafety} from "react-icons/ai";
import {HiOutlineStatusOnline} from "react-icons/hi";
import {BiSolidOffer} from "react-icons/bi";


const Services = () => {
    return (
    <div id="features-section">
        <Container className="py-5">
            <Row>
                <Col>
                  <h1 className="quinary-color fs-1 p-0 mb-4">Kenapa kami?</h1>
                </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <AiOutlineSafety size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Safety &amp; Security</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Kendaraan kami dilengkapi dengan standar keamanan tertinggi dan selalu terawat. Anda bisa menikmati perjalanan dengan tenang, knowing your safety is our priority.</p>
              </Col>
              <Col xs={4}>
                <HiOutlineStatusOnline size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Online Booking</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Pesan kendaraan kapan saja, di mana saja, dengan sistem pemesanan online yang cepat dan mudah. Semua ada di ujung jari Anda!</p>
              </Col>
              <Col xs={4}>
                <BiSolidOffer size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Harga Terbaik</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Kami menawarkan harga sewa yang kompetitif tanpa mengorbankan kualitas. Dapatkan kendaraan berkualitas tinggi dengan harga yang ramah di kantong!</p>
              </Col>
            </Row>
        </Container>
    </div> 
    );
};
export default Services;