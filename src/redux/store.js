import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
