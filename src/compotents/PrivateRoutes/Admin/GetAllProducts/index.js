import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../../redux/admin/adminSlice";

import LoadingPage from "../../../Pages/Loading";

function Products() {
  const { products, success } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(success);
  const [data, setData] = useState(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setData(products);
    setIsLoading(success);
  }, [success, products]);

  return (
    <>
      {isLoading ? (
        <div className="table-responsive">
          <table className="table rounded table-hover text-center">
            <thead className=" ">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr style={{ maxHeight: "100px" }} key={item._id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      alt="productImage"
                      style={{ height: "100px", borderRadius: "5px" }}
                      src={item.images[0]}
                    />
                  </td>
                  <td>{item.title.substring(0, 25)}...</td>
                  <td>{item.description.substring(0, 25)}</td>

                  <td>
                    {item.price} <b>₺</b>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default Products;
