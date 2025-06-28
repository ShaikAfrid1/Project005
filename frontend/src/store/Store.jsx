import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice"; // ✅ check name casing!
import cartReducer from "../reducers/CartSlice";
import productReducer from "../reducers/ProductSlice";

export const store = configureStore({
  reducer: {
    userReducer,
    cartReducer,
    productReducer,
  },
});
