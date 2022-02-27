import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedAdminPages({ component: Component, ...rest }) {
  const { isAuth, isAdmin } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) => {
        true && true ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}

export default ProtectedAdminPages;
