import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthLocalStorage } from "../../../LocalStorage";

function PrivateUserRoute({ component: Component, ...rest }) {
  const { isAuth } = AuthLocalStorage();

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuth ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    </>
  );
}

export default PrivateUserRoute;
