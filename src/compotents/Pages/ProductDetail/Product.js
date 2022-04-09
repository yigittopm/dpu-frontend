import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ProductCarousel from "./ProductCarousel";

import { Card, Col, Row, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addProductToShopCart } from "../../../redux/product/productSlice";

function Product({ productDetail }) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const setCountValue = (value) => {
    if (value < 0 && count === 1) return setCount(1);
    setCount(count + value);
  };

  return (
    <Card className="d-flex d-wrap m-4 bg-light border-light">
      <Row>
        <Col md={6} className="bg-white border">
          <ProductCarousel productDetail={productDetail.images} />
        </Col>

        <Col
          md={6}
          className="align-items-center justify-content-center bg-light p-3"
        >
          <Card.Title>{productDetail.title}</Card.Title>
          <Row>
            <Col>
              <Card.Text>
                <b>{productDetail.price} ₺</b>
              </Card.Text>
            </Col>
            <Col className="d-flex justify-content-end">
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
          <Card.Text>{productDetail.description.substring(0, 100)}</Card.Text>
          <ButtonGroup>
            <Button
              onClick={() => setCountValue(-1)}
              className="btn btn-warning"
            >
              -
            </Button>
            <Button
              onClick={() =>
                dispatch(addProductToShopCart({ productDetail, count }))
              }
              className="btn btn-warning w-100 col-lg-6"
            >
              <span>Sepete Ekle ({count})</span>
              {/* <i class="fa-solid fa-cart-shopping"></i> */}
            </Button>
            <Button
              onClick={() => setCountValue(1)}
              className="btn btn-warning"
            >
              +
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Card>
  );
}

export default Product;
