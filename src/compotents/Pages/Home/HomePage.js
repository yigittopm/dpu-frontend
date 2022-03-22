import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/product/productSlice";
import { Rings } from "react-loader-spinner";
import LoadingPage from "../LoadingPage";
import Products from "./Products";

function HomePage() {
  const dispatch = useDispatch();
  const productSlice = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return <div className="">{loading ? <Products /> : <LoadingPage />}</div>;
}

export default HomePage;
