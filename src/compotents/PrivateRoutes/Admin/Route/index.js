import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import AllProduts from "../GetAllProducts";
import AllUsers from "../GetAllUsers";
import AllOrders from "../GetAllOrders";
import NotFound from "../../../Pages/NotFound";
import InfoCount from "../InfoCount";

function AdminRoute() {
  const infoComponent = () => {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <InfoCount name={"User"} color={1} />
        <InfoCount name={"Order"} color={2} />
        <InfoCount name={"Products"} color={3} />
      </div>
    );
  };
  return (
    <div className={"row "}>
      <div
        className={
          "col-md-2 vh-100 navbar-dark bg-dark display-flex justify-content-center align-items-center"
        }
      >
        <ul className={"list-group bg-dark text-light"}>
          <Link
            className={
              "list-group-item list-group-item-dark bg-dark text-light"
            }
            style={{ textDecoration: "none" }}
            to={"/admin/"}
          >
            Stats
          </Link>
          <Link
            className={
              "list-group-item list-group-item-dark bg-dark text-light"
            }
            style={{ textDecoration: "none" }}
            to={"/admin/orders"}
          >
            Orders
          </Link>
          <Link
            className={
              "list-group-item list-group-item-dark bg-dark text-light"
            }
            style={{ textDecoration: "none" }}
            to={"/admin/users"}
          >
            Users
          </Link>
          <Link
            className={
              "list-group-item list-group-item-dark bg-dark text-light"
            }
            style={{ textDecoration: "none" }}
            to={"/admin/5"}
          >
            Products
          </Link>
        </ul>
      </div>

      <div className={"col-md-10"}>
        <Switch>
          <Route exact path={"/admin/"} component={infoComponent} />
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
