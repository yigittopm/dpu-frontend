import React from "react";

function Table({ shopCart }) {
  return (
    <div className="table-responsive">
      <table className="table rounded table-hover text-center">
        <thead className="table-dark text-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Unit</th>
          </tr>
        </thead>
        <tbody>
          {shopCart.map((item) => (
            <tr style={{ maxHeight: "100px" }} key={item._id}>
              <th scope="row">{item._id.substring(0, 10)}</th>
              <td>
                <img
                  alt="productImage"
                  style={{ height: "100px", borderRadius: "5px" }}
                  src={item.images[0]}
                />
              </td>
              <td>{item.title.substring(0, 25)}...</td>
              <td>{item.description.substring(0, 10)}</td>

              <td>
                {item.price} <b>₺</b>
              </td>
              <td>1</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
