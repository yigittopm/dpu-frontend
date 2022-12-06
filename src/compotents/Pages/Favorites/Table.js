import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AuthLocalStorage } from "../../../LocalStorage";
import { toast } from "react-toastify";
import {
  addProductToShopCart,
  removeProductFromShopCart,
} from "../../../redux/product/productSlice";
import { useHistory } from "react-router-dom";

function FavoritesTable({ favorites }) {
  const dispatch = useDispatch();
  const { isAuth } = AuthLocalStorage();
  const history = useHistory();

  const createToasy = () => {
    toast.success("Added to cart", {
      autoClose: "1sn",
      position: "bottom-right",
    });
  };

  return (
    <div className="table-responsive">
      <table className="table rounded table-hover text-center">
        <thead className="table-dark text-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {favorites.map((item, index) => (
            <tr style={{ maxHeight: "100px" }} key={item.productDetail._id}>
              <th scope="row">{index + 1}</th>
              <td>
                <img
                  alt="productImage"
                  style={{ height: "100px", borderRadius: "5px" }}
                  src={item.productDetail.images[0]}
                />
              </td>

              <td>{item.productDetail.title.substring(0, 25)}...</td>
              <td>{item.productDetail.description.substring(0, 25)}</td>

              <td>
                {item.productDetail.price} <b>₺</b>
              </td>

              <td>
                <ButtonGroup>
                  <Button
                    onClick={() =>
                      dispatch(
                        removeProductFromShopCart(item.productDetail._id)
                      )
                    }
                    className="btn btn-danger text-light"
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>
                  <Button
                    onClick={() => {
                      if (isAuth) {
                        createToasy();
                        dispatch(
                          addProductToShopCart({
                            productDetail: item.productDetail,
                            count: 1,
                          })
                        );
                      } else {
                        history.push("/login");
                      }
                    }}
                    className="btn btn-warning w-100 col-lg-6"
                  >
                    <span>Sepete Ekle</span>
                    {/* <i class="fa-solid fa-cart-shopping"></i> */}
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FavoritesTable;
