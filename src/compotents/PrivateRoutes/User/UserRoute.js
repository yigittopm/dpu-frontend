import React from "react";
import { Switch, Route } from "react-router-dom";

import EditProfile from "./EditProfile";
import NotFound from "../../Pages/NotFound";

function UserRoute() {
  return (
    <>
      <h3>Profile Route</h3>
      <Switch>
        <Route exact path="/profile/edit" component={EditProfile} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default UserRoute;
