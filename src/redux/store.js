import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./auth/authSlice";
import ProductSlice from "./product/productSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    product: ProductSlice,
  },
});
