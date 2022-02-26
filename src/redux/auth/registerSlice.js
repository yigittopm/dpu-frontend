import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    email: "",
    password: "",
  },
  reducers: {
    success: (state, action) => {},
    failed: (state, action) => {},
  },
});

export const { success, failed } = RegisterSlice.actions;

export const register = (data) => {
  return async (dispatch) => {};
};

export default RegisterSlice.reducer;
