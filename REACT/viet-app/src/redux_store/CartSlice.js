// slice ---> (action + reducer)
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((itm) => itm.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;

