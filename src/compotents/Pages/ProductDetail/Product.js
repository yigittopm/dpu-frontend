import React from "react";
import ReactStars from "react-rating-stars-component";
import ProductCarousel from "./ProductCarousel";

import { Card, Col, Row } from "react-bootstrap";

function Product({ productDetail }) {
  return (
    <Card className="d-flex m-4 p-3 bg-light">
      <Row>
        <Col md={6}>
          <ProductCarousel productDetail={productDetail} />
        </Col>

        <Col md={6} className="align-items-center justify-content-center">
          <Card.Title>{productDetail.title}</Card.Title>
          <Card.Text>
            {productDetail.price} <b>₺</b>
          </Card.Text>
          {productDetail.description.substring(0, 100)}
          <Card.Text></Card.Text>

          <ReactStars
            count={5}
            //onChange={ratingChanged}
            value={parseInt(productDetail.rating)}
            size={16}
            isHalf={true}
            activeColor="#ffd700"
          />
        </Col>
      </Row>
    </Card>
  );
}

export default Product;
