import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductLocalStorage } from "../../../LocalStorage";
import { getProductById } from "../../../redux/product/productSlice";
import LoadingPage from "../Loading";
import Product from "./Product";

function Detail() {
  const { product_id } = useParams();
  const dispatch = useDispatch();
  const localProduct = ProductLocalStorage();

  const { success } = useSelector((state) => state.product);
  const [isLoading, setIsLoading] = useState(success);

  useEffect(() => {
    dispatch(getProductById(product_id));
    window.scrollTo(0, 0);
  }, [dispatch, product_id]);

  useEffect(() => {
    setIsLoading(success);
  }, [localProduct, success]);

  return (
    <div>
      {isLoading ? <Product productDetail={localProduct} /> : <LoadingPage />}
    </div>
  );
}

export default Detail;
