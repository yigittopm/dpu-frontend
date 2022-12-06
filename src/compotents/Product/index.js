import React from "react";
import ReactStars from "react-rating-stars-component";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthLocalStorage } from "../../LocalStorage";
import { addProductToFavorites } from "../../redux/product/productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function ProductSchema({ product, size = "" }) {
  const { isAuth } = AuthLocalStorage();
  const dispatch = useDispatch();
  const history = useHistory();
  const discount = (parseFloat(product.price) * 110) / 100;
  const result = discount.toFixed(3);
  const [isFavorites, setIsFavorites] = useState(false);

  const createToasy = () => {
    toast.success("Added to favorites", {
      autoClose: "1sn",
      position: "bottom-right",
    });
  };

  return (
    <Card className="p-2 border-light" key={product._id}>
      {/*style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}*/}
      <Col>
        <button
          className="btn"
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
          }}
          onClick={() => {
            if (isAuth) {
              createToasy();
              dispatch(addProductToFavorites({ productDetail: product }));
              setIsFavorites(!isFavorites);
            } else {
              history.push("/login");
            }
          }}
        >
          <i
            className="fa-solid fa-heart"
            style={{
              color: `${isFavorites ? "red" : "grey"}`,
              fontSize: "30px",
            }}
          ></i>
        </button>
        <img
          src={product?.images[0]}
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
        <i
          style={{
            textDecoration: "line-through",
            color: "	rgb(168,168,168)",
          }}
        >
          {result} ₺
        </i>
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

        <Link to={`/products/${product._id}`} className="btn btn-warning w-100">
          <span>İncele</span>
          {/* <i class="fa-solid fa-cart-shopping"></i> */}
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductSchema;
