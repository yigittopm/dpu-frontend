import React from "react";
import { Switch, Route } from "react-router-dom";

import Profile from "../Profile";
import ShopCart from "../../../Pages/ShopCart";
import Orders from "../../../Pages/Orders";
import NotFound from "../../../Pages/NotFound";

function UserRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/profile/edit" component={Profile} />
        <Route path="/profile/shop-cart" component={ShopCart} />
        <Route path="/profile/orders" component={Orders} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default UserRoute;
