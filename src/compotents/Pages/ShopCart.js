import React from "react";
import { ShopCartLocalStorage } from "../../LocalStorage";

function ShopCart() {
  const shopCart = ShopCartLocalStorage();
  return (
    <div>
      <ul>
        {shopCart.map((item, index) => (
          <li className="card" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopCart;
