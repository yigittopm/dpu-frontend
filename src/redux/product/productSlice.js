import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../base";

const DEV_BASE = `${BASE_URL}/products`;

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    categories: [],
    currentProduct: {},
    success: false,
    message: "",
  },
  reducers: {
    successProducts: (state, action) => {
      const data = action.payload;
      const products = data.data;
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
    successCategories: (state, action) => {
      const { data } = action.payload.data;
      return {
        ...state,
        categories: data,
      };
    },
    failed: (state, action) => {},
  },
});

export const {
  successProducts,
  successCurrentProduct,
  successCategories,
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

export const getAllCategories = (data) => {
  return async (dispatch) => {
    try {
      await axios.get(`${DEV_BASE}/categories`).then((res) => {
        if (res.data.success) {
          dispatch(successCategories(res));
        } else {
          dispatch(failed(res.data));
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export default ProductSlice.reducer;
