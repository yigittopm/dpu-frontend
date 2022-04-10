import React from "react";
import { AuthLocalStorage } from "../../../../LocalStorage";
import { Row, Col } from "reactstrap";
function AddPage() {
  const { email, username, role, id, image } = AuthLocalStorage();
  return (
    <div className="text-center mt-4">
      <Row>
        <Col className="col-md-6">
          <img alt="profil" src={image} width={250} />
        </Col>
        <Col className="col-md-6 text-center mt-3 p-3">
          <h3>@{username}</h3>
          <code>{email}</code>
          <h4>Role: {role}</h4>
          <h5>🔑 : {id}</h5>
        </Col>
      </Row>
    </div>
  );
}

export default AddPage;
