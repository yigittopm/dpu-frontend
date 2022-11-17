import React from "react";
import {Redirect, Route} from "react-router-dom";
import {AuthLocalStorage} from "../../../LocalStorage";
import Suspended from "../../Pages/Suspended";

function PrivateUserRoute({ component: Component, ...rest }) {
  const { isAuth, isActive } = AuthLocalStorage();

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuth ? (
            isActive ? (
              <Component {...props} />
            ) : (
              <Suspended />
            )
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </>
  );
}

export default PrivateUserRoute;
