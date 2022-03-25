import React from "react";
import { Switch, Route } from "react-router-dom";

import Categories from "../Topbar/Categories";
import PrivateAdminRoute from "../PrivateRoutes/Admin/PrivateAdminRoute";
import PrivateUserRoute from "../PrivateRoutes/User/PrivateUserRoute";
import HomePage from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import ProductDetail from "../Pages/ProductDetail";
import UserRoute from "../PrivateRoutes/User/UserRoute";
import AdminRoute from "../PrivateRoutes/Admin/AdminRoute";
import NotFound from "../Pages/NotFound";
import Footer from "../Footer";

function Content() {
  return (
    <div className="content">
      <Categories />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/products/:product_id" component={ProductDetail} />
        <PrivateUserRoute path="/profile" component={UserRoute} />
        <PrivateAdminRoute path="/admin" component={AdminRoute} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Content;
