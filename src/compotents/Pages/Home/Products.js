import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import LoadingPage from "../LoadingPage";

import { Card, Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import { getAllProducts } from "../../../redux/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const { success, products } = useSelector((state) => state.product);

  const [isLoading, setIsLoading] = useState(success);
  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(success);
    setProductsData(products);
  }, [products, success]);
  return (
    <>
      {isLoading ? (
        <>
          <div className="row m-3 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {productsData.map((product, index) => (
              <Card className="p-2 border-light" key={product._id}>
                <Col>
                  <img
                    src={product.images[0]}
                    className="card-img img-thumbnail justify-content-center"
                    width={50}
                    height={50}
                    style={{ border: "none" }}
                    alt={product.description.substring(0, 30)}
                  />
                </Col>
                <Card.Body>
                  <Card.Title
                    style={{
                      minHeight: "50px",
                      maxHeight: "50px",
                      overflow: "hidden",
                      whiteSpace: "pre-wrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.title}
                  </Card.Title>
                  <Row>
                    <Col>
                      <Card.Text>
                        <b>{product.price} ₺</b>
                      </Card.Text>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <ReactStars
                        count={5}
                        //onChange={ratingChanged}
                        value={parseInt(product.rating)}
                        size={16}
                        isHalf={true}
                        activeColor="#ffd700"
                      />
                      <i>{product.rating}</i>
                    </Col>
                  </Row>

                  <Card.Text
                    style={{
                      minHeight: "60px",
                      maxHeight: "60px",
                      overflow: "hidden",
                      whiteSpace: "pre-wrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.description.substring(0, 100)}
                  </Card.Text>

                  <Link
                    to={`/products/${product._id}`}
                    className="btn btn-warning w-100"
                  >
                    <span>İncele</span>
                    {/* <i class="fa-solid fa-cart-shopping"></i> */}
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default Products;
