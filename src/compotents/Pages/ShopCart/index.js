import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { ShopCartLocalStorage } from "../../../LocalStorage";

import Table from "./Table";
import Title from "./Title";
import BuyButton from "./BuyButton";
import SelectAddress from "./SelectAddress";

function ShopCart() {
  const shopCart = ShopCartLocalStorage();
  const length = shopCart.length;

  return (
    <div className="p-4 row">
      <Title length={length} />
      {shopCart.length > 0 ? (
        <>
          <div className="col-lg-9 col-ms-12 mb-2">
            <Table shopCart={shopCart} />
          </div>
          <div className="col-lg-3 col-sm-12">
            <Switch>
              <Route
                exact
                path="/profile/shop-cart/address"
                children={<SelectAddress products={shopCart} />}
              />
              <Route
                exact
                path="/profile/shop-cart"
                children={<BuyButton products={shopCart} />}
              />
            </Switch>
          </div>
        </>
      ) : (
        <div
          className="d-flex flex-wrap justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <h2>Sepet Boş, henüz ürün eklemediniz..</h2>
          <Link to="/">Ana Sayfa</Link>
        </div>
      )}
    </div>
  );
}

export default ShopCart;
