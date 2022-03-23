import React, { useEffect, useState } from "react";
import CarouselPage from "./CarouselPage";
import LoadingPage from "../LoadingPage";

import { Link } from "react-router-dom";
import { getAllProducts } from "../../../redux/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Televizyon",
  //     price: 20000,
  //   },
  //   { id: 2, name: "Televizyon", price: 20000 },
  //   { id: 3, name: "Televizyon", price: 20000 },
  //   { id: 4, name: "Televizyon", price: 20000 },
  //   { id: 5, name: "Televizyon", price: 20000 },
  //   { id: 6, name: "Televizyon", price: 20000 },
  //   { id: 7, name: "Televizyon", price: 20000 },
  //   { id: 8, name: "Televizyon", price: 20000 },
  //   { id: 9, name: "Televizyon", price: 20000 },
  //   { id: 10, name: "Televizyon", price: 20000 },
  // ];

  const dispatch = useDispatch();
  const { success, products } = useSelector((state) => state.product);

  const [isLoading, setIsLoading] = useState(success);
  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    setIsLoading(success);
    setProductsData(products);
  }, [success]);

  console.log(products);

  return (
    <>
      {isLoading ? (
        <>
          <CarouselPage />

          <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4  m-3">
            {productsData.map((product) => (
              <div key={product.id} className="col mb-4">
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    width={250}
                    height={250}
                    alt={product.description.substring(0, 30)}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      {product.price} <b>₺</b>
                    </p>
                    <p className="card-text">
                      {product.description.substring(0, 100)}
                    </p>

                    <Link to="/" className="btn btn-warning w-100">
                      <span>Buy </span>
                      {/* <i class="fa-solid fa-cart-shopping"></i> */}
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
