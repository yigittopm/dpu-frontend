import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedAdminPages({ component: Component, ...rest }) {
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
