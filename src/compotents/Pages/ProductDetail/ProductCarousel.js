import React from "react";
import { Carousel } from "react-bootstrap";

function ProductCarousel({ productDetail }) {
  return (
    <Carousel className="text-center" variant="dark">
      {productDetail.map((item, index) => (
        <Carousel.Item interval={1000} key={item}>
          <img
            src={item}
            style={{ border: "none" }}
            className="img-top img-thumbnail col-md-6"
            width={250}
            height={250}
            alt={item}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
