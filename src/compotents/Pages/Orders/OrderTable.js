import React from "react";

function OrderTable({ orders = [] }) {
  const isExists = orders.length > 0;

  const sumUnit = (item = []) => {
    let sum = 0;
    item.map((i) => (sum += i.count));
    return sum;
  };

  const sumPrice = (item = []) => {
    let sum = 0;
    item.map((i) => (sum += +i.productDetail.price));
    return sum + " TL";
  };

  return (
    <>
      {isExists ? (
        <div className="table-responsive p-4">
          <table className="table rounded table-hover text-center">
            <thead className="table-dark text-light">
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Products</th>
                <th scope="col">Total</th>
                <th scope="col">Address</th>
                <th scope="col">Unit</th>
                <th scope="col">More</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(({ address, products }, index) => {
                return (
                  <tr style={{ maxHeight: "100px" }} key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {products &&
                        products.map(
                          (i, index) =>
                            // eslint-disable-next-line jsx-a11y/img-redundant-alt

                            index < 3 && (
                              <img
                                alt="image"
                                style={{
                                  maxHeight: "30px",
                                  maxWidth: "auto",
                                  borderRadius: "5px",
                                  margin: "1px",
                                }}
                                src={
                                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                                }
                              />
                            )
                        )}
                    </td>
                    <td>{sumPrice(products)}</td>
                    <td>{address}</td>
                    <td>{sumUnit(products)}</td>
                    <td>Edit</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2>Hiç siparişiniz yok..</h2>
      )}
    </>
  );
}

export default OrderTable;
