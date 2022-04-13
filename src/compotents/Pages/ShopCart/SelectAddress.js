import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddressesLocalStorage, AuthLocalStorage } from "../../../LocalStorage";

import { Card, CardBody } from "reactstrap";
import { createOrder } from "../../../redux/user/userSlice";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function SelectAddress({ products }) {
  const { accessToken } = AuthLocalStorage();
  const addresses = AddressesLocalStorage();
  const [address, setAddress] = useState(addresses[0]);
  const history = useHistory();

  const dispatch = useDispatch();
  return (
    <Card className="p-2 bg-light text-dark border-0">
      <CardBody>
        <h2>Adres Seç</h2>
        <div className="mb-2 mr-2">
          <select
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-select"
          >
            {addresses.map((item, index) => (
              <option selected key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => {
            dispatch(createOrder({ products, address }, accessToken));
            toast.success("Siparişiniz alındı.");
            history.push("/profile/orders");
            localStorage.removeItem("shopCart");
          }}
          className="btn btn-warning w-100 text-dark"
        >
          Alışverişi Tamamla
        </button>
      </CardBody>
    </Card>
  );
}

export default SelectAddress;
