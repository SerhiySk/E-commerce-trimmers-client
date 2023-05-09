import customFetch from '../../utils/axios';
export const verifyEmailThunk = async (payload, thunkAPI) => {
  const { verificationToken, email } = payload;
  let url = '/auth/verify-email';
  try {
    const { data } = await customFetch.post(url, {
      verificationToken,
      email,
    });
    return data.msg;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const sendResetPasswordLinkThunk = async (email, thunkAPI) => {
  let url = '/auth/forgot-password';
  try {
    const { data } = await customFetch.post(url, {
      email,
    });

    return data.msg;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const resetPasswordThunk = async (
  { email, password, token },
  thunkAPI
) => {
  let url = '/auth/reset-password';
  try {
    const { data } = await customFetch.post(url, { email, password, token });

    return data.msg;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
