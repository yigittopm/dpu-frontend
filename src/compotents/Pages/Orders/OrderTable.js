import React from "react";

function OrderTable({ orders }) {
  const isExists = orders.length > 0;
  return (
    <>
      {isExists ? (
        <div className="table-responsive p-4">
          <table className="table rounded table-hover text-center">
            <thead className="table-dark text-light">
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Products</th>
                <th scope="col">Address</th>
                <th scope="col">Total</th>
                <th scope="col">Unit</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(({ address, products }, index) => (
                <tr style={{ maxHeight: "100px" }} key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {/* {products.map((item, index) => (
                      <small key={index}>{item.productDetail.title}</small>
                    ))} */}
                  </td>
                  <td>{address}</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              ))}
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
