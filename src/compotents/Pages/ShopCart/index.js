import React from "react";
import { ShopCartLocalStorage } from "../../../LocalStorage";

import Table from "./Table";
import Title from "./Title";
import BuyButton from "./BuyButton";

function ShopCart() {
  const shopCart = ShopCartLocalStorage();

  return (
    <div className="p-4 row">
      <Title />
      <div className="col-lg-9 col-ms-12 mb-2">
        <Table shopCart={shopCart} />
      </div>
      <div className="col-lg-3 col-sm-12">
        <BuyButton />
      </div>
    </div>
  );
}

export default ShopCart;
