import React, { useEffect, useState } from "react";
import Product from "../../Product";
import LoadingPage from "../Loading";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsByCategories } from "../../../redux/product/productSlice";

function Category({ match }) {
  const dispatch = useDispatch();
  const { products, success } = useSelector((state) => state.product);
  const { category } = useParams();

  const [categoryProduct, setCategoryProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(success);

  useEffect(() => {
    dispatch(getProductsByCategories(category));
  }, [dispatch, category]);

  useEffect(() => {
    setCategoryProduct(products);
    setIsLoading(success);
  }, [products, success]);

  return (
    <div className="p-2">
      <div
        style={{ backgroundColor: "rgb(221, 255, 237)" }}
        className="d-flex align-items-center text-dark rounded"
      >
        <h5>
          {category} <small>(55 Ürün bulundu)</small>
        </h5>
      </div>

      {isLoading ? (
        <div className="row m-3 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {categoryProduct.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default Category;
