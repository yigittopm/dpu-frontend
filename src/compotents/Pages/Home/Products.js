import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import CarouselPage from "./CarouselPage";
import LoadingPage from "../LoadingPage";

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

          <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4  m-3">
            {productsData.map((product) => (
              <div key={product._id} className="col mb-4">
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    width={250}
                    height={250}
                    alt={product.description.substring(0, 30)}
                  />
                  <div className="card-body">
                    <Link to={`/products/${product._id}`}>
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">
                        {product.price} <b>₺</b>
                      </p>
                      <p className="card-text">
                        {product.description.substring(0, 100)}
                      </p>

                      <ReactStars
                        count={5}
                        //onChange={ratingChanged}
                        value={product.rating.toString()}
                        size={16}
                        isHalf={true}
                        activeColor="#ffd700"
                      />

                      <Link to="/" className="btn btn-warning w-100">
                        <span>Buy </span>
                        {/* <i class="fa-solid fa-cart-shopping"></i> */}
                      </Link>
                    </Link>
                  </div>
                </div>
              </div>
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
