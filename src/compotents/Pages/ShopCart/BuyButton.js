import React from "react";

function BuyButton() {
  return (
    <div className="d-flex justify-content-end">
      <b>
        Total: <i>500</i>
      </b>
      <button className="btn btn-success">Sipariş Et</button>
    </div>
  );
}

export default BuyButton;
