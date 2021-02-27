import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    initialCart: [],
    initialCartNumber: null,
  },
  reducers: {
    removeCartItem: (state, action) => {
      state.initialCart = JSON.parse(localStorage.getItem("cart"));
      for (var i = 0; i < state.initialCart.length; i++) {
        if (action.payload === state.initialCart[i].id) {
          state.initialCart.splice(i, 1);
          localStorage.setItem("cart", JSON.stringify(state.initialCart));
          break;
        }
      }
    },
  },
});

const { reducer, actions } = cartSlice;
export const { removeCartItem } = actions;
export default reducer;
