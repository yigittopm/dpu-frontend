import React from "react";
import { Route, Switch } from "react-router-dom";

import Profile from "../Profile";
import ShopCart from "../../../Pages/ShopCart";
import Orders from "../../../Pages/Orders";
import NotFound from "../../../Pages/NotFound";
import CreditCardInfo from "../../../Pages/ShopCart/CreditCardInfo";
import Addresses from "../../../Pages/Addresses";

function UserRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/profile/edit" component={Profile} />
        <Route path="/profile/shop-cart" component={ShopCart} />
        <Route path="/profile/orders" component={Orders} />
        <Route path="/profile/credit-card" component={CreditCardInfo} />
        <Route path="/profile/addresses" component={Addresses} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default UserRoute;
