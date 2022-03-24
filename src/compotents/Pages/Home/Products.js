import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import CarouselPage from "./CarouselPage";
import LoadingPage from "../LoadingPage";

import { Card, Col } from "react-bootstrap";

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
          <CarouselPage />

          <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  m-3">
            {productsData.map((product) => (
              <Card className="p-2" key={product._id}>
                <Col>
                  <img
                    src={product.image}
                    className="card-img justify-content-center"
                    width={150}
                    height={150}
                    alt={product.description.substring(0, 30)}
                  />
                </Col>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.price} <b>₺</b>
                  </Card.Text>
                  <Card.Text>{product.description.substring(0, 100)}</Card.Text>

                  <ReactStars
                    count={5}
                    //onChange={ratingChanged}
                    value={parseInt(product.rating)}
                    size={16}
                    isHalf={true}
                    activeColor="#ffd700"
                  />

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
