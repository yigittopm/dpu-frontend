import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../base";

const DEV_BASE = `${BASE_URL}/admin`;

export const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    products: [],
    users: [],
    orders: [],
    success: false,
    message: "",
  },
  reducers: {
    successProducts: (state, action) => {
      const { data, success } = action.payload;
      return {
        ...state,
        products: data,
        success: success,
      };
    },
    successUsers: (state, action) => {
      const { data, success } = action.payload;
      return {
        ...state,
        users: data,
        success: success,
      };
    },

    successUpdatedUser: (state, action) => {
      const { data, success } = action.payload;
      return {
        ...state,
        users: data,
        success: success,
      };
    },

    failed: (state, action) => {
      return {
        ...state,
        success: false,
        message: "Bir hata oluştu",
      };
    },
  },
});

export const { successProducts, successUsers, failed } = AdminSlice.actions;

export const getAllUsers = (data) => {
  return async (dispatch) => {
    try {
      await axios
        .get(`${DEV_BASE}/users`, {
          headers: { refreshToken: data },
        })
        .then((res) => {
          if (res.data.success) {
            dispatch(successUsers(res.data));
          } else {
            dispatch(failed());
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateUserById = (data) => {
  return async (dispatch) => {
    try {
      await axios
        .put(
          `${DEV_BASE}/users/${data.id}`,
          { isActive: data.isActive },
          { headers: { refreshToken: data.refreshToken } }
        )
        .then((res) => {
          if (res.data.success) {
            dispatch(successUsers(res.data));
          } else {
            dispatch(failed());
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getAllProducts = (data) => {
  return async (dispatch) => {
    try {
      await axios.get(`${DEV_BASE}/products`).then((res) => {
        if (res.data.success) {
          dispatch(successProducts(res.data));
        } else {
          dispatch(failed());
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export default AdminSlice.reducer;
