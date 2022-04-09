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
    <>
      <h1>{category}</h1>
      {isLoading ? (
        <div className="row m-3 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {categoryProduct.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default Category;
