import { current } from '@reduxjs/toolkit';

export const setOrdersPerPageReducer = state => {
  const { page, orders } = current(state);
  state.ordersPerPage = orders.slice((page - 1) * 10, page * 10);
};
export const changePageReducer = (state, { payload }) => {
  state.page = payload;
};
