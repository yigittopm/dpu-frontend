import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../base";

const DEV_BASE = `${BASE_URL}/products`;

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    shopCart: [],
    currentProduct: {},
    success: false,
    message: "",
  },
  reducers: {
    successProducts: (state, action) => {
      const data = action.payload;
      const products = data.data;
      if (!localStorage.getItem("currentProduct")) {
        localStorage.setItem("currentProduct", JSON.stringify(products[0]));
      }
      return {
        ...state,
        products: products,
        success: data.success,
        message: "Success",
      };
    },
    successProductsByCategory: (state, action) => {
      const data = action.payload;
      const products = data.data;
      if (!localStorage.getItem("currentProduct")) {
        localStorage.setItem("currentProduct", JSON.stringify(products[0]));
      }
      return {
        ...state,
        products: products,
        success: data.success,
        message: "Success",
      };
    },
    successCurrentProduct: (state, action) => {
      const { data } = action.payload;
      localStorage.setItem("currentProduct", JSON.stringify(data));

      return {
        ...state,
        success: true,
        currentProduct: data,
      };
    },
    successAddShopCart: (state, action) => {
      const { productDetail, count } = action.payload;
      const isExists = current(state.shopCart).findIndex(
        (e) => e.productDetail._id === productDetail._id
      );

      if (isExists > -1) {
        state.shopCart[isExists].count += count;
        localStorage.setItem("shopCart", JSON.stringify(state.shopCart));
      } else {
        state.shopCart.push({ productDetail, count });
        localStorage.setItem("shopCart", JSON.stringify(state.shopCart));
      }
    },
    successRemoveFromShopCart: (state, action) => {},
    failed: (state, action) => {},
  },
});

export const {
  successProducts,
  successProductsByCategory,
  successCurrentProduct,
  successAddShopCart,
  successRemoveFromShopCart,
  failed,
} = ProductSlice.actions;

export const getAllProducts = (data) => {
  return async (dispatch) => {
    try {
      await axios.get(`${DEV_BASE}`).then((res) => {
        if (res.data.success) {
          dispatch(successProducts(res.data));
        } else {
          dispatch(failed(res.data));
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductsByCategories = (data) => {
  return async (dispatch) => {
    try {
      await axios.get(`${DEV_BASE}/categories/${data}`).then((res) => {
        if (res.data.success) {
          dispatch(successProductsByCategory(res.data));
        } else {
          dispatch(failed(res.data));
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getProductById = (data) => {
  return async (dispatch) => {
    try {
      await axios.get(`${DEV_BASE}/${data}`).then((res) => {
        if (res.data.success) {
          dispatch(successCurrentProduct(res.data));
        } else {
          dispatch(failed(res.data));
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const addProductToShopCart = (data) => {
  return async (dispatch) => {
    dispatch(successAddShopCart(data));
  };
};

export const removeProductFromShopCart = (data) => {
  return async (dispatch) => {
    dispatch(successRemoveFromShopCart(data));
  };
};

export default ProductSlice.reducer;
