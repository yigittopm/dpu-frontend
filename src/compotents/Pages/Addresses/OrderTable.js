import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CardBody } from "reactstrap";
import { createAddress } from "../../../redux/user/userSlice";

function AddressTable({ addresses = [], accessToken = "" }) {
  const isExists = addresses.length > 0;
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");

  return (
    <>
      {isExists ? (
        <div className="table-responsive p-4">
          <Row>
            <Col md={8}>
              <table className="table rounded table-hover text-center">
                <thead className="table-dark text-light">
                  <tr>
                    <th scope="col">Address ID</th>
                    <th scope="col">Address</th>
                    <th scope="col">More</th>
                  </tr>
                </thead>
                <tbody>
                  {addresses.map((i, index) => (
                    <tr style={{ maxHeight: "100px" }} key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{i}</td>
                      <td>Edit</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
            <Col md={4}>
              <Card className="p-2 bg-light text-dark border-0">
                <CardBody>
                  <h2>Yeni Adres Ekle</h2>
                  <div className="input-group">
                    <input
                      className="form-control w-75 "
                      placeholder="Yeni adresinizi giriniz"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <button
                      className="btn bg-primary text-white "
                      type="button"
                      onClick={() => {
                        dispatch(createAddress(address, accessToken));
                        setAddress("");
                      }}
                    >
                      +
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <h2>Hiç siparişiniz yok..</h2>
      )}
    </>
  );
}

export default AddressTable;
