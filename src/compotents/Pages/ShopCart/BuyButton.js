import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

function BuyButton({ products }) {
  const sum = (arr) => {
    return arr.reduce((prev, curr) => prev + curr);
  };
  const counts = products.map((item) => item.count);
  const totalProduct = sum(counts);

  const prices = products.map((item) => {
    return item.count * item.productDetail.price;
  });
  const totalPrice = sum(prices);

  return (
    <Card className="p-2 bg-light text-dark border-0">
      <CardBody>
        <h2>Sipariş Özeti</h2>
        <div className="d-flex justify-content-between">
          <label>Sepet Tutarı: </label>
          <i>{totalPrice.toFixed(3)} ₺</i>
        </div>
        <div className="d-flex justify-content-between">
          <label>Toplam Adet: </label>
          <i>
            <b>{totalProduct}</b>
          </i>
        </div>
        <div className="d-flex justify-content-between">
          <label>Kargo:</label>
          <b className="text-success">
            <i>Ücretsiz</i>
          </b>
        </div>
        <hr />
        <div className="d-flex justify-content-between mb-2">
          <label>Ödenecek Tutar:</label>
          <b style={{ fontSize: "20px" }}>{totalPrice.toFixed(3)},00 ₺</b>
        </div>
        <Link
          to="/profile/shop-cart/address"
          className="btn btn-primary w-100 text-light"
        >
          Devam Et <i class="fa-solid fa-angle-right"></i>
        </Link>
      </CardBody>
    </Card>
  );
}

export default BuyButton;
