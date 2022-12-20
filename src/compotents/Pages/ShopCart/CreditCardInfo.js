import React from "react";
import { useDispatch } from "react-redux";
import { AuthLocalStorage, ShopCartLocalStorage } from "../../../LocalStorage";
import { Card, CardBody, Col, Row } from "reactstrap";
import { createOrder } from "../../../redux/user/userSlice";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function CreditCardInfo({ products }) {
  const dispatch = useDispatch();
  const shopCart = ShopCartLocalStorage();
  const { accessToken, email } = AuthLocalStorage();
  const address = JSON.parse(localStorage.getItem("selectedAddress"));
  const history = useHistory();
  // const [creditCard, setCreditCard] = useState({
  //   number: "",
  //   name: "",
  //   expiry: "",
  //   cvc: "",
  //   issuer: "",
  //   focused: "",
  //   formData: null,
  // });

  return (
    <Row className="w-100 d-flex justify-content-center align-items-center">
      <Col xs={4} md={4} lg={4}>
        <div className="d-flex justify-content-center mt-3 row m-0">
          <Card className="p-2 bg-light text-dark border-0">
            <CardBody>
              <h4>Ödeme Bilgilerinizi Tamamlayınız</h4>

              {/* <div key="Payment" className={"mt-4"}>
                <div className="App-payment">
                  <Cards
                    number={creditCard.number}
                    name={creditCard.name}
                    expiry={creditCard.expiry}
                    cvc={creditCard.cvc}
                    focused={creditCard.focused}
                  />
                </div>
              </div>

              <form className="mt-4 mb-4">
                <div class="form-row">
                  <Row className="m-2">
                    <div class="col">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Kart Numarası"
                        max={12}
                        onChange={(e) => {
                          setCreditCard((state) => {
                            return {
                              ...state,
                              number: e.target.value,
                            };
                          });
                        }}
                      />
                    </div>
                  </Row>
                  <Row className="m-2">
                    <div class="col col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Kart Üzerindeki İsim"
                        onChange={(e) => {
                          setCreditCard((state) => {
                            return {
                              ...state,
                              name: e.target.value,
                            };
                          });
                        }}
                      />
                    </div>
                    <div class="col col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Son Kullanım Tarihi"
                        onChange={(e) => {
                          setCreditCard((state) => {
                            return {
                              ...state,
                              expiry: e.target.value,
                            };
                          });
                        }}
                      />
                    </div>
                  </Row>
                </div>
              </form> */}

              <button
                onClick={() => {
                  dispatch(
                    createOrder(
                      {
                        products: shopCart,
                        address,
                        email,
                      },
                      accessToken
                    )
                  );
                  toast.success("Siparişiniz alındı.");
                  history.push("/profile/orders");
                }}
                className="btn btn-warning w-100 text-dark"
              >
                Alışverişi Tamamla
              </button>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default CreditCardInfo;
