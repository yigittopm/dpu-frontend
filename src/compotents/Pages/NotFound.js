import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="d-flex align-items-center flex-column mt-5">
      <h2 className="mb-auto">This Page Was Not Found.</h2>
      <hr />
      <h4>{pathname}</h4>
    </div>
  );
}

export default NotFound;
