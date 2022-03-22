import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingPage() {
  return (
    <div className="text-center h-100">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoadingPage;
