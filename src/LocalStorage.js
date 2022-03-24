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
