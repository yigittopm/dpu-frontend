import React from "react";
import ReactStars from "react-rating-stars-component";
import ProductCarousel from "./ProductCarousel";

import { Card, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addProductToShopCart } from "../../../redux/product/productSlice";

function Product({ productDetail }) {
  const dispatch = useDispatch();

  return (
    <Card className="d-flex d-wrap m-4 p-3 bg-light">
      <Row>
        <Col md={6}>
          <ProductCarousel productDetail={productDetail} />
        </Col>

        <Col md={6} className="align-items-center justify-content-center mt-4">
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

          {productDetail.description.substring(0, 100)}
          <Card.Text></Card.Text>

          <Button
            onClick={() => dispatch(addProductToShopCart(productDetail))}
            className="btn btn-warning w-100 col-lg-6"
          >
            <span>Sepete Ekle</span>
            {/* <i class="fa-solid fa-cart-shopping"></i> */}
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default Product;
