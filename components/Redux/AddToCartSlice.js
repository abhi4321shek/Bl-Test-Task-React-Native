import { createSlice } from '@reduxjs/toolkit';

const AddToCartSlice = createSlice({
  name: 'AddToCart',
  initialState: {
    Cart: [],
  },
  reducers: {
    Add_To_Cart(state, action) {
      state.Cart = state.Cart.concat(action.payload);
    },
    Remove_From_Cart(state, action) {
      const index = action.payload;
      state.Cart.splice(index, 1);
    },
    Reset_cart(state) {
      state.Cart = [];
    },
  },
});

export const { Add_To_Cart, Remove_From_Cart,Reset_cart } = AddToCartSlice.actions;
export default AddToCartSlice.reducer;