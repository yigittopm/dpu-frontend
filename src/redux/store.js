import { configureStore } from "@reduxjs/toolkit";

import AdminSlice from "./admin/adminSlice";
import AuthSlice from "./auth/authSlice";
import ProductSlice from "./product/productSlice";
import UserSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    admin: AdminSlice,
    user: UserSlice,
    product: ProductSlice,
  },
});
