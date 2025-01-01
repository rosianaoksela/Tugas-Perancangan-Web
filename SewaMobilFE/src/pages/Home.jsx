import React from "react";

import Slider from "../components/slider";

import About from "./About";
import Client from "./Client";
import Services from "./Services";
import Mobil from "./Mobil";
import Contact from "./Contact";

const Home = () => {
  return (
    <div id="homepage">
      <Slider />
      <div id="about">
        <About />
      </div>
      <div id="vehicles">
        <Mobil />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="client">
        <Client />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};
export default Home;
