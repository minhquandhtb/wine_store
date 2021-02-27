import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "features/ProductShow/productShowSlice";
import cartReducer from "features/Cart/cartSlice";

export default configureStore({
  reducer: {
    urlChange: urlReducer,
    cart: cartReducer,
  },
});
