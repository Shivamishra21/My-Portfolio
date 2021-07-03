import React from "react";
import bg1 from "../assets/background5.jpg";
import bg2 from "../assets/background2.jpg";
import bg3 from "../assets/background3.jpg";
import { Carousel } from "react-bootstrap";
import './Carousal.css'


const Carousal = () => {
  return (
    <div id = "home" className="overlay">
      <Carousel controls={false} indicators interval={1500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={bg1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={bg2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={bg3} alt="Third slide" />
        </Carousel.Item>

      </Carousel>
      <div className="overlay"></div>
     
    </div>
  );
};

export default Carousal;
