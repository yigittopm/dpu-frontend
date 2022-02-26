import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    isAdmin: false,
    user: null,
  },
  reducers: {},
});

//export const { register, login, logout, refresh } = AuthSlice.actions;

export default AuthSlice.reducer;
