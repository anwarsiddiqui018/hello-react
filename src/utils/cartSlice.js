import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // different types of acctions like additem, removeitem and clear
    addItem: (state, action) => {
      // reducer function for add item
      // mutating the state here
      state.items.push(action.payload);
    },
    // we are not using action so we are not using it
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // state = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; // exported Actiions

export default cartSlice.reducer; // export reducer
