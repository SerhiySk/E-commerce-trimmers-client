import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { clearAllProductsState, clearFilters } from '../products/productsSlice';
import { logoutUser } from './userSlice';
export const registerUserThunk = async (user, thunkAPI) => {
  let url = '/auth/register';
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  let url = '/auth/login';
  try {
    const { data } = await customFetch.post(url, user);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const logoutUserThunk = async (_, thunkAPI) => {
  let url = '/auth/logout';
  try {
    const { data } = await customFetch.delete(url);
    return data.msg;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (user, thunkAPI) => {
  let url = '/users/updateUser';
  try {
    const { data } = await customFetch.patch(url, user);

    return data.user;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
export const updateUserPasswordThunk = async (password, thunkAPI) => {
  let url = '/users/updateUserPassword';
  try {
    const { data } = await customFetch.patch(url, password);

    return data.msg;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearAllProductsState());
    thunkAPI.dispatch(clearFilters());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

export const showMeThunk = async (_, thunkAPI) => {
  let url = '/users/showMe';
  try {
    const { data } = await customFetch.get(url);
    return data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
