import React from "react";
import { Switch, Route } from "react-router-dom";

import Profile from "../Profile";
import ShopCart from "../../../Pages/ShopCart";
import NotFound from "../../../Pages/NotFound";

function UserRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/profile/edit" component={Profile} />
        <Route exact path="/profile/shop-cart" component={ShopCart} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default UserRoute;
