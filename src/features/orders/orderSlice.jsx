import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  createOrderThunk,
  updateOrderStatusThunk,
  setAllOrdersThunk,
  getSingleOrderThunk,
} from './orderThunk';

import { changePageReducer, setOrdersPerPageReducer } from './orderReducer';

const initialState = {
  orders: [],
  ordersPerPage: [],
  count: 0,
  page: 1,
  numOfPages: 1,
  order: {},
  isLoading: false,
  isOrdersLoading: false,
  clientSecret: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changePage: changePageReducer,
    setOrdersPerPage: setOrdersPerPageReducer,
  },
  extraReducers: builder => {
    builder
      .addCase(createOrder.pending, state => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.order = payload.order;
        state.clientSecret = payload.clientSecret;
        state.isLoading = false;
      })
      .addCase(createOrder.rejected, (state, { payload }) => {
        state.isLoading = false;

        toast.error(payload);
      })
      .addCase(updateOrderStatus.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateOrderStatus.fulfilled, (state, { payload }) => {
        state.order = payload.order;
        state.clientSecret = '';
        state.isLoading = false;
      })
      .addCase(updateOrderStatus.rejected, (state, { payload }) => {
        state.isLoading = false;

        toast.error('Something went wrong');
      })
      .addCase(getSingleOrder.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSingleOrder.fulfilled, (state, { payload }) => {
        state.order = payload.order;
        state.isLoading = false;
      })
      .addCase(getSingleOrder.rejected, (state, { payload }) => {
        state.isLoading = false;

        toast.error(payload);
      })
      .addCase(setAllOrders.pending, state => {
        state.isOrdersLoading = true;
      })
      .addCase(setAllOrders.fulfilled, (state, { payload }) => {
        const { orders, count, numOfPages } = payload;
        state.orders = orders;
        state.count = count;
        state.numOfPages = numOfPages;
        state.isOrdersLoading = false;
      })
      .addCase(setAllOrders.rejected, (state, { payload }) => {
        state.isOrdersLoading = false;

        toast.error(payload);
      });
  },
});
export const createOrder = createAsyncThunk(
  'order/createOrder',
  createOrderThunk
);
export const updateOrderStatus = createAsyncThunk(
  'order/updateOrderStatus',
  updateOrderStatusThunk
);
export const setAllOrders = createAsyncThunk(
  'order/setAllOrders',
  setAllOrdersThunk
);
export const getSingleOrder = createAsyncThunk(
  'order/getSingleOrder',
  getSingleOrderThunk
);
export const { changePage, setOrdersPerPage } = orderSlice.actions;
export default orderSlice.reducer;
