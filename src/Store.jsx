import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import productsSlice from './features/products/productsSlice';
import cartSlice from './features/cart/cartSlice';

import productSlice from './features/product/productSlice';
import authSlice from './features/auth/authSlice';
import orderSlice from './features/orders/orderSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    product: productSlice,
    products: productsSlice,
    cart: cartSlice,
    order: orderSlice,
  },
});
