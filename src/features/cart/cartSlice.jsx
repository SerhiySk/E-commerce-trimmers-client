import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCartFromLocalStorage } from '../../utils/localStorage';
import {
  addToCartReducer,
  removeCartItemReducer,
  toggleAmountReducer,
  clearCartReducer,
  countCartTotalsReducer,
} from './cartReducers';
const initialState = {
  cart: getCartFromLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  tax: 499,
  shippingFee: 534,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: addToCartReducer,
    removeCartItem: removeCartItemReducer,
    toggleAmount: toggleAmountReducer,
    clearCart: clearCartReducer,
    countCartTotals: countCartTotalsReducer,
  },
});

export const {
  addToCart,
  removeCartItem,
  toggleAmount,
  clearCart,
  countCartTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
