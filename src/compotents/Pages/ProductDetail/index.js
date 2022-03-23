import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductById } from "../../../redux/product/productSlice";
import LoadingPage from "../LoadingPage";
import ReactStars from "react-rating-stars-component";

function Detail() {
  const { pathname } = useLocation();
  const productId = pathname.split("/")[2];
  const dispatch = useDispatch();
  const { success, currentProduct } = useSelector((state) => state.product);
  const [isLoading, setIsLoading] = useState(success);
  const [productDetail, setProductDetail] = useState(currentProduct);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    setIsLoading(success);
    setProductDetail(currentProduct);
  }, [currentProduct, success]);

  return (
    <div>
      {isLoading ? (
        <div className="d-flex row m-4 vh-100">
          <div className="col-md-6">
            <img
              src={productDetail.image}
              className="img-top col-md-6"
              width={250}
              height={250}
              alt={productDetail.description.substring(0, 30)}
            />
          </div>

          <div className="col-md-6">
            <h5 className="card-title">{productDetail.title}</h5>
            <p className="card-text">
              {productDetail.price} <b>₺</b>
            </p>
            <p className="card-text">
              {productDetail.description.substring(0, 100)}
            </p>

            <ReactStars
              count={5}
              //onChange={ratingChanged}
              value={productDetail.rating.toString()}
              size={16}
              isHalf={true}
              activeColor="#ffd700"
            />
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default Detail;
