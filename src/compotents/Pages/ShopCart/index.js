import React from "react";
import { ShopCartLocalStorage } from "../../../LocalStorage";

import Table from "./Table";
import Title from "./Title";
import BuyButton from "./BuyButton";

function ShopCart() {
  const shopCart = ShopCartLocalStorage();

  return (
    <div className="p-4">
      <Title />
      <Table shopCart={shopCart} />
      <BuyButton />
    </div>
  );
}

export default ShopCart;
