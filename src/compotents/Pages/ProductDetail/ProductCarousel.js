import React from "react";
import { Carousel } from "react-bootstrap";

function ProductCarousel({ productDetail }) {
  return (
    <Carousel className="text-center">
      <Carousel.Item interval={1000}>
        <img
          src={productDetail.image}
          className="img-top img-thumbnail col-md-6"
          width={250}
          height={250}
          alt={productDetail.description.substring(0, 30)}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src={productDetail.image}
          className="img-top  img-thumbnail col-md-6"
          width={250}
          height={250}
          alt={productDetail.description.substring(0, 30)}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;
