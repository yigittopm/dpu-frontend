import React, { useEffect, useState } from "react";
import { AuthLocalStorage } from "../../../../LocalStorage";
import { Row, Col } from "reactstrap";

import { getAddresses } from "../../../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";

function AddPage() {
  const { accessToken } = AuthLocalStorage();
  const dispatch = useDispatch();
  const { addresses } = useSelector((state) => state.user);
  const [address, setAddress] = useState(addresses);
  const { email, username, role, id, image } = AuthLocalStorage();

  useEffect(() => {
    dispatch(getAddresses(accessToken));
  }, [dispatch, accessToken]);

  useEffect(() => {
    setAddress(addresses);
  }, [dispatch, addresses]);

  console.log(address);

  return (
    <div className="text-center mt-4">
      <Row>
        <Col className="col-md-6">
          <img alt="profil" src={image} width={250} />
        </Col>
        <Col className="col-md-6 text-start mt-3 p-3">
          <h4>Role: {role}</h4>
          <h3>@{username}</h3>
          <code>{email}</code>
          <h5>🔑 : {id}</h5>
          <Row>
            <Col >
              <Link to="/profile/orders" className="btn btn-primary m-2">
                Siparişlerim
              </Link>




            </Col>

          </Row>

        </Col>

      </Row>
    </div>
  );
}

export default AddPage;
