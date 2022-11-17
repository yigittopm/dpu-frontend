import React, {useState} from "react";
import {AddressesLocalStorage} from "../../../LocalStorage";

import {Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";

function SelectAddress({ products }) {
  const addresses = AddressesLocalStorage();
  const [address, setAddress] = useState(addresses[0]);

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

        <Link
          className={"btn btn-warning w-100 text-dark"}
          to={"/profile/credit-card"}
        >
          Kart Bilgilerini Gir
        </Link>
      </CardBody>
    </Card>
  );
}

export default SelectAddress;
