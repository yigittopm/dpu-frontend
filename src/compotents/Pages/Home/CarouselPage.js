import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselPage() {
  return (
    <Carousel className="m-3">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={require("../../../assets/carousels/1.png")}
          alt="Televizyon"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={require("../../../assets/carousels/2.png")}
          alt="Yüzük"
        />
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require("../../../assets/carousels/3.png")}
          alt="Laptop"
        />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={require("../../../assets/carousels/4.png")}
          alt="Musluk"
        />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={require("../../../assets/carousels/5.png")}
          alt="Telefon"
        />
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={require("../../../assets/carousels/6.png")}
          alt="Masa"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;
