import { configureStore } from "@reduxjs/toolkit";
import AddToCartSlice from "./AddToCartSlice";

const AppStore = configureStore({
  reducer: {
    AddToCart: AddToCartSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default AppStore;