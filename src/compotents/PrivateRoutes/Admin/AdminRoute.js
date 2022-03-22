import React from "react";
import { Switch, Route } from "react-router-dom";
import AddAdmin from "../../Pages/AddAdmin";
function AdminRoute() {
  return (
    <>
      <h3>Admin Route</h3>
      <Switch>
        <Route exact path="/admin/add" component={AddAdmin} />
      </Switch>
    </>
  );
}

export default AdminRoute;
