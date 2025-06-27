import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducers/CartSlice";
import productSlice from "../reducers/ProductSlice";
import userSlice from "../reducers/userSlice"; 

export const store = configureStore({
  reducer: {
    productReducer: productSlice,
    cartReducer: cartSlice,
    userReducer: userSlice,
  },
});
