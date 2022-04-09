import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingPage() {
  return (
    <div className="text-center vh-50">
      <Spinner animation="border" role="status" />
      <h4>Loading...</h4>
    </div>
  );
}

export default LoadingPage;
