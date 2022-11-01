import React from "react";
import { useLocation } from "react-router-dom";

function Suspended(props) {
  const { pathname } = useLocation();

  return (
    <div
      style={{ minHeight: "500px" }}
      className="d-flex align-items-center justify-content-center flex-column"
    >
      <img
        height="250px"
        alt="Not Found!"
        src={require("../../../assets/suspended/suspended.jpg")}
      />
      <h2>
        {props.statusCode} - {props.message}
      </h2>
      <hr />
      <h4>{pathname}</h4>
    </div>
  );
}

Suspended.defaultProps = {
  statusCode: 404,
  message: "This Page Was Not Found",
};

export default Suspended;
