import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingPage() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "200px" }}
    >
      <Spinner animation="border" role="status" variant="warning" size="lg" />
    </div>
  );
}

export default LoadingPage;
