import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  verifyEmailThunk,
  sendResetPasswordLinkThunk,
  resetPasswordThunk,
} from './authThunk';

const initialState = {
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(verifyEmail.pending, state => {
        state.isLoading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(verifyEmail.rejected, (state, { payload }) => {
        state.isLoading = false;

        toast.error(payload);
      })
      .addCase(sendResetPasswordLink.pending, state => {
        state.isLoading = true;
      })
      .addCase(sendResetPasswordLink.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(sendResetPasswordLink.rejected, (state, { payload }) => {
        state.isLoading = false;

        toast.error(payload);
      })
      .addCase(resetPassword.pending, state => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.isLoading = false;

        toast.error(payload);
      });
  },
});
export const verifyEmail = createAsyncThunk(
  'auth/verifyEmail',
  verifyEmailThunk
);
export const sendResetPasswordLink = createAsyncThunk(
  'auth/forgotPassword',
  sendResetPasswordLinkThunk
);
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  resetPasswordThunk
);

export const {} = authSlice.actions;
export default authSlice.reducer;
