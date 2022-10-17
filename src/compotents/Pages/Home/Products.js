import React, { useEffect, useState } from "react";
import Product from "../../Product";
import LoadingPage from "../Loading";
import { getAllProducts } from "../../../redux/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const { success, products, search } = useSelector((state) => state.product);

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
            {productsData.filter(item => item.title.toLocaleUpperCase().includes(search)).map((product) => (
              <Product key={product._id} product={product} />
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
