import { configureStore } from "@reduxjs/toolkit";

import AdminSlice from "./admin/adminSlice";
import AuthSlice from "./auth/authSlice";
import ProductSlice from "./product/productSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    admin: AdminSlice,
    product: ProductSlice,
  },
});
