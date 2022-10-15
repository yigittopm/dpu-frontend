import React from "react";
import {Link, Route, Switch} from "react-router-dom";

import AllProduts from "../GetAllProducts";
import AllUsers from "../GetAllUsers";
import AllOrders from "../GetAllOrders";
import NotFound from "../../../Pages/NotFound";

function AdminRoute() {
  return (
    <div className={"row "}>
        <div className={"col-md-2 vh-100 navbar-dark bg-dark display-flex justify-content-center align-items-center"}>
            <ul className={"list-group bg-dark text-light"}>
                <Link className={"list-group-item list-group-item-dark bg-dark text-light"} style={{ textDecoration: 'none' }} to={"/admin/users"}>Users</Link>
                <Link className={"list-group-item list-group-item-dark bg-dark text-light"} style={{ textDecoration: 'none' }} to={"/admin/users"}>Users</Link>
                <Link className={"list-group-item list-group-item-dark bg-dark text-light"} style={{ textDecoration: 'none' }} to={"/admin/users"}>Users</Link>
                <Link className={"list-group-item list-group-item-dark bg-dark text-light"} style={{ textDecoration: 'none' }} to={"/admin/users"}>Users</Link>
                <Link className={"list-group-item list-group-item-dark bg-dark text-light"} style={{ textDecoration: 'none' }} to={"/admin/users"}>Users</Link>

            </ul>
        </div>

        <div className={"col-md-10"}>
            <Switch>
                <Route exact path={"/admin/5"} component={AllProduts} />
                <Route exact path={"/admin/users"} component={AllUsers} />
                <Route exact path={"/admin/orders"} component={AllOrders} />
                <Route exact path={"*"} component={NotFound} />
            </Switch>
        </div>


    </div>
  );
}
export default AdminRoute;
