import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { setProductThunk } from './productThunk';

const initialState = {
  isProductLoading: false,
  isProductError: false,
  product: {},
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setProduct.pending, state => {
        state.isProductLoading = true;
      })
      .addCase(setProduct.fulfilled, (state, { payload }) => {
        state.isProductLoading = false;
        state.product = payload;
      })
      .addCase(setProduct.rejected, (state, { payload }) => {
        state.isProductLoading = false;
        state.isProductError = true;

        toast.error(payload);
      });
  },
});

export const setProduct = createAsyncThunk(
  'product/setProduct',
  setProductThunk
);

export const {} = productSlice.actions;
export default productSlice.reducer;
