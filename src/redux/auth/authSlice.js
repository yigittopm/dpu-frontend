import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL /*DEV_BASE_URL*/ } from "../../base";

const BASE = `${BASE_URL}/auth/register`;
//const DEV_BASE = `${DEV_BASE_URL}/auth`;

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    isAdmin: false,
    id: "",
    role: "",
    username: "",
    email: "",
    message: "",
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    success: (state, action) => {
      const data = action.payload;
      return {
        ...state,
        isAuth: data.accessToken && data.refreshToken && true,
        isAdmin: data.user.role === "admin",
        id: data.user._id,
        role: data.user.role,
        username: data.user.username,
        email: data.user.email,
        message: "Success",
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      };
    },
    failed: (state, action) => {
      console.log(action);
    },
  },
});

export const { success, failed } = AuthSlice.actions;

export const register = (data) => {
  return async (dispatch) => {
    try {
      await axios.post(`${BASE}/register`, data).then((res) => {
        if (res.status === 200) {
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

export const login = (data) => {
  return async (dispatch) => {
    try {
      await axios.post(`${BASE}/login`, data).then((res) => {
        if (res.status === 200) {
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

export default AuthSlice.reducer;
