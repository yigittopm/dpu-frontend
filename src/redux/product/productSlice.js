import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../base";

const DEV_BASE = `${BASE_URL}/products`;
//const DEV_BASE = `${DEV_BASE_URL}/products`;

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    success: false,
    message: "",
  },
  reducers: {
    success: (state, action) => {
      const data = action.payload;
      const products = data.data;
      return {
        ...state,
        products: products,
        success: data.success,
        message: "Success",
      };
    },
    failed: (state, action) => {},
  },
});

export const { success, failed } = ProductSlice.actions;

export const getAllProducts = (data) => {
  return async (dispatch) => {
    try {
      await axios.get(`${DEV_BASE}`).then((res) => {
        if (res.data.success) {
          dispatch(success(res.data));
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
