import { createSlice } from "@reduxjs/toolkit";

export const productShowSlice = createSlice({
  name: "url",
  initialState: {
    initialPagination:
      "https://my-json-server.typicode.com/minhquandhtb/wine_store/products?_page=1&_limit=6",
    initialSlice:
      "https://my-json-server.typicode.com/minhquandhtb/wine_store/products?_page=1&_limit=8",
    initialType: "",
    initialCart: [],
  },
  reducers: {
    setPagination: (state, action) => {
      state.initialPagination = `https://my-json-server.typicode.com/minhquandhtb/wine_store/products?_page=${action.payload}&_limit=6`;
    },
    setType: (state, action) => {
      state.initialType = `$&type=${action.payload}`;
    },
    addCart: (state, action) => {
      if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      state.initialCart = JSON.parse(localStorage.getItem("cart"));
      var check;
      for (var i = 0; i < state.initialCart.length; i++) {
        if (action.payload.id === state.initialCart[i].id) {
          state.initialCart[i].quantity++;
          check = 1;
          break;
        }
      }
      if (check !== 1) {
        state.initialCart.push(action.payload);
      }
      const cartItems = state.initialCart;
      localStorage.setItem("cart", JSON.stringify(cartItems));
    },
    loadCart: (state) => {
      if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      state.initialCart = JSON.parse(localStorage.getItem("cart"));
    },
  },
});

const { reducer, actions } = productShowSlice;
export const { setPagination, setType, addCart, loadCart } = actions;
export default reducer;
