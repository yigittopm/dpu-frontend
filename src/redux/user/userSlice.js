import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../base";

const DEV_BASE = `${BASE_URL}/user`;

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    addresses: [],
    newAddress: "",
    orders: [],
    newOrder: {},
    status: false,
    message: "",
  },
  reducers: {
    successGetAddress: (state, action) => {
      return {
        ...state,
        addresses: action.payload.data.addresses,
        status: true,
        message: "Success",
      };
    },
    successCreateOrder: (state, action) => {
      console.log(action.payload);
    },
    failed: (state, action) => {
      return {
        ...state,
        status: false,
        message: action.payload,
      };
    },
  },
});

export const { successGetAddress, successCreateOrder, failed } =
  UserSlice.actions;

export const getAddresses = (data) => {
  return async (dispatch) => {
    try {
      await axios
        .get(`${DEV_BASE}/address`, {
          headers: { Authorization: `Bearer ${data}` },
        })
        .then((res) => {
          if (res.data.success) {
            dispatch(successGetAddress(res.data));
          } else {
            dispatch(failed(res.data));
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
};

export const createOrder = (data, token) => {
  return async (dispatch) => {
    try {
      await axios
        .post(`${DEV_BASE}/orders`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.success) {
            dispatch(successCreateOrder(res.data));
          } else {
            dispatch(failed(res.data));
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
};

export default UserSlice.reducer;
