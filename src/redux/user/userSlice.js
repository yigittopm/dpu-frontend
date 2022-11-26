import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../base";

const DEV_BASE = `${BASE_URL}/user`;

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    addresses: [],
    newAddress: "",
    orders: [],
    newOrder: {},
    success: false,
    message: "",
  },
  reducers: {
    successGetAddress: (state, action) => {
      localStorage.setItem(
        "addresses",
        JSON.stringify(action.payload.data.addresses)
      );
      return {
        ...state,
        addresses: action.payload.data.addresses,
        success: true,
        message: "Success",
      };
    },
    successCreateAddress: (state, action) => {
      toast.success("Adres başarıyla oluşturuldu.");
      return {
        ...state,
        newAddress: action.payload,
        addresses: [...state.addresses, action.payload],
        success: true,
        message: "Success",
      };
    },
    successGetAllOrders: (state, action) => {
      return {
        ...state,
        orders: action.payload.data,
        success: true,
        message: "Success",
      };
    },
    successCreateOrder: (state, action) => {
      return {
        ...state,
        newOrder: action.payload,
        orders: [...state.orders, action.payload],
        success: true,
        message: "Success",
      };
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

export const {
  successGetAddress,
  successCreateAddress,
  successGetAllOrders,
  successCreateOrder,
  failed,
} = UserSlice.actions;

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

export const createAddress = (add, token) => {
  return async (dispatch) => {
    try {
      await axios
        .post(
          `${DEV_BASE}/address`,
          { address: add },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
            dispatch(successCreateAddress(res.data.data));
          } else {
            dispatch(failed(res.data));
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getOrders = (data) => {
  return async (dispatch) => {
    try {
      await axios
        .get(`${DEV_BASE}/orders`, {
          headers: { Authorization: `Bearer ${data}` },
        })
        .then((res) => {
          if (res.data.success) {
            dispatch(successGetAllOrders(res.data));
          } else {
            failed(res.data);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
};

export const createOrder = (data, token) => {
  console.log(data);
  return async (dispatch) => {
    try {
      await axios
        .post(`${DEV_BASE}/orders`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.success) {
            dispatch(successCreateOrder(res.data));
            localStorage.removeItem("shopCart");
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
