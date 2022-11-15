import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateAdminRoute from "../PrivateRoutes/Admin/PrivateAdminRoute";
import PrivateUserRoute from "../PrivateRoutes/User/PrivateUserRoute";
import HomePage from "../Pages/Home";
import RegisterPage from "../Pages/Register";
import LoginPage from "../Pages/Login";
import ProductDetail from "../Pages/ProductDetail";
import Category from "../Pages/Category";
import UserRoute from "../PrivateRoutes/User/Route";
import AdminRoute from "../PrivateRoutes/Admin/Route";
import NotFound from "../Pages/NotFound";
import Footer from "../Footer";
import { Col, Row } from "reactstrap";
import Sidebar from "../Sidebar";
import { useSidebar } from "../../context/Sidebar";

function Content() {
  const { isOpen } = useSidebar();

  return (
    <div className="content">
      <Row>
        {isOpen && (
          <Col md={isOpen ? 2 : 0}>
            <Sidebar />
          </Col>
        )}

        <Col md={isOpen ? 10 : 12} style={{ marginTop: "56px" }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route
              exact
              path="/products/:product_id"
              component={ProductDetail}
            />
            <Route exact path="/categories/:category" component={Category} />
            <PrivateUserRoute path="/profile" component={UserRoute} />
            <PrivateAdminRoute path="/admin" component={AdminRoute} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Col>
      </Row>
    </div>
  );
}

export default Content;
