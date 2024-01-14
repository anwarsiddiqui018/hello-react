import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // this big reduce store one small reduce that is cartReducer (we have only one slice now thats why(we can add more))
    cart: cartReducer,
  },
});

export default appStore;
