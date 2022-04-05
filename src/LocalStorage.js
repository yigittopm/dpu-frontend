import { useSelector } from "react-redux";

export const AuthLocalStorage = () => {
  const authSlice = useSelector((state) => state.auth);

  return localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : authSlice;
};

export const ProductLocalStorage = () => {
  const productSlice = useSelector((state) => state.product);

  return localStorage.getItem("currentProduct")
    ? JSON.parse(localStorage.getItem("currentProduct"))
    : productSlice;
};

export const ShopCartLocalStorage = () => {
  const { shopCart } = useSelector((state) => state.product);

  return localStorage.getItem("shopCart")
    ? JSON.parse(localStorage.getItem("shopCart"))
    : shopCart;
};
