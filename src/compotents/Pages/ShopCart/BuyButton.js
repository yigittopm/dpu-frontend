import React from "react";

import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

function BuyButton() {
  return (
    <Card className="p-2 bg-light text-dark border-0">
      <CardBody>
        <h2>Sipariş Özeti</h2>
        <div className="d-flex justify-content-between">
          <label>Sepet Tutarı: </label>
          <i>9000 ₺</i>
        </div>
        <div className="d-flex justify-content-between">
          <label>Toplam Adet: </label>
          <i>10</i>
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
          <b style={{ fontSize: "20px" }}>9500,00 ₺</b>
        </div>
        <Link to="/" className="btn btn-primary w-100 text-light">
          Alışverişi Tamamla
        </Link>
      </CardBody>
    </Card>
  );
}

export default BuyButton;
