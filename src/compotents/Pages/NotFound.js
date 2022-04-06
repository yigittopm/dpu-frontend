import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const { pathname } = useLocation();

  return (
    <div
      style={{ minHeight: "500px" }}
      className="d-flex align-items-center justify-content-center flex-column"
    >
      <img
        height="250px"
        alt="Not Found!"
        src={require("../../assets/notFound/notFound.jpg")}
      />
      <h2>This Page Was Not Found.</h2>
      <hr />
      <h4>{pathname}</h4>
    </div>
  );
}

export default NotFound;
