import React from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthLocalStorage } from "../../../LocalStorage";

function PrivateAdminRoute({ component: Component, ...rest }) {
  const { isAuth, isAdmin } = AuthLocalStorage();

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuth && isAdmin ? (
            <Component {...props} />
          ) : (
            <Redirect to="/profile" />
          )
        }
      />
    </>
  );
}

export default PrivateAdminRoute;
