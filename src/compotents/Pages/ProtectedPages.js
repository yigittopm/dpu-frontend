import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedPages({ component: Component, ...rest }) {
  //const { isAuth } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (true) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default ProtectedPages;
