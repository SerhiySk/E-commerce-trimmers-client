import customFetch from '../../utils/axios';
export const setProductThunk = async (productId, thunkAPI) => {
  let url = `/products/${productId}`;
  try {
    const { data } = await customFetch.get(url);
    return data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
