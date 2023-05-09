import customFetch from '../../utils/axios';
export const createOrderThunk = async (_, thunkAPI) => {
  const { cart, tax, shippingFee } = thunkAPI.getState().cart;
  let url = '/orders';
  try {
    const { data } = await customFetch.post(url, { cart, tax, shippingFee });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const updateOrderStatusThunk = async (_, thunkAPI) => {
  const {
    clientSecret,
    order: { _id },
  } = thunkAPI.getState().order;
  let url = `/orders/${_id}`;
  try {
    const { data } = await customFetch.patch(url, {
      paymentIntentId: clientSecret,
    });
    data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const setAllOrdersThunk = async (_, thunkAPI) => {
  let url = '/orders/showAllMyOrders';
  try {
    const { data } = await customFetch.get(url);
    const numOfPages = Math.ceil(data.orders.length / 10);
    return { ...data, numOfPages };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const getSingleOrderThunk = async (id, thunkAPI) => {
  let url = `/orders/${id}`;
  try {
    const { data } = await customFetch.get(url);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
