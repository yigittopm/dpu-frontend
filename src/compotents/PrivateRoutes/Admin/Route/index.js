import React from "react";
import { Switch, Route } from "react-router-dom";

import AllProduts from "../GetAllProducts";
import AllUsers from "../GetAllUsers";
import AllOrders from "../GetAllOrders";
import NotFound from "../../../Pages/NotFound";
import InfoCount from "../InfoCount";

function AdminRoute() {
  return (
    <div>
      <div className="card-group button-group justify-content-around p-3">
        <InfoCount color={0} name="Products" to="/admin" />
        <InfoCount color={1} name="Users" to="/admin/users" />
        <InfoCount color={2} name="Orders" to="/admin/orders" />
      </div>
      <Switch>
        <Route exact path={"/admin/5"} component={AllProduts} />
        <Route exact path={"/admin/users"} component={AllUsers} />
        <Route exact path={"/admin/orders"} component={AllOrders} />
        <Route exact path={"*"} component={NotFound} />
      </Switch>
    </div>
  );
}

export default AdminRoute;
