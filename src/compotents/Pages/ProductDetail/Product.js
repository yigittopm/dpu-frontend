import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ProductCarousel from "./ProductCarousel";

import { Card, Col, Row, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addProductToShopCart } from "../../../redux/product/productSlice";
import { Link } from "react-router-dom";

function Product({ productDetail }) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const data = parseInt(productDetail.price.replace(".", ","));

  const discount = (data * 110) / 100;
  const result = discount.toFixed(3);

  const installment = 6;
  const dividePrice = result / installment;

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
          <Card.Title>
            <h3>{productDetail.title}</h3>
          </Card.Title>
          <Card.Text>{productDetail.description}</Card.Text>
          <div className="p-2">
            <Row>
              <Col>
                <i
                  style={{
                    textDecoration: "line-through",
                    color: "	rgb(168,168,168)",
                  }}
                >
                  {result} ₺
                </i>{" "}
                | <b className="text-success">%10 İndirim</b>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Text>
                  <h4>
                    <b>{productDetail.price},00 ₺</b>
                  </h4>
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
            <Row>
              <Col>
                <small>
                  <i>
                    {installment} Taksit X {dividePrice.toFixed(3)},00 TL
                  </i>
                </small>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <i className="fa-solid fa-truck mr-3 text-success"></i>{" "}
                  <i className="text-success">
                    <b>Hızlı Teslimat:</b>
                  </i>
                  <i>1 gün içinde kargoda!</i>
                </p>
              </Col>
            </Row>
          </div>

          <div className="mb-3">
            <details>
              <summary>Teknik Özellikler</summary>
              <ul style={{ textDecoration: "none" }}>
                <li>Fiyat Performans test 11</li>
                <li>Fiyat Performans test 11</li>
                <li>Fiyat Performans test 11</li>
                <li>Fiyat Performans test 11</li>
                <li>Fiyat Performans test 11</li>
                <li>Fiyat Performans test 11</li>
              </ul>
            </details>
          </div>

          <div className="d-flex justify-content-between">
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

            <Link to="/profile/shop-cart">
              <button className="btn bg-secondary text-light">
                <b>Sepete Git </b>
                <i class="fa-solid fa-cart-arrow-down"></i>
              </button>
            </Link>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default Product;
