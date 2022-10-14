import React from "react";
import {Switch, Route, Link} from "react-router-dom";

import AllProduts from "../GetAllProducts";
import AllUsers from "../GetAllUsers";
import AllOrders from "../GetAllOrders";
import NotFound from "../../../Pages/NotFound";
import InfoCount from "../InfoCount";

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
{/*<div className="card-group button-group justify-content-around p-3">
        <InfoCount color={0} name="Products" to="/admin" />
        <InfoCount color={1} name="Users" to="/admin/users" />
        <InfoCount color={2} name="Orders" to="/admin/orders" />
      </div>*/}
export default AdminRoute;
