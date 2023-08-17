import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toastMessage } from 'utils/toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//!  register
export const register = createAsyncThunk(
  'auth/register',
  async (registerData, thinkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', registerData);

      toastMessage.registerSuccess(data);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toastMessage.registerError(error);
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

//!  login
export const login = createAsyncThunk(
  'auth/login',
  async (loginData, thinkAPI) => {
    try {
      const { data } = await axios.post('/users/login', loginData);
      toastMessage.loginSuccess(data);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toastMessage.loginError(error);
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

//!   logout
export const logout = createAsyncThunk('auth/logout', async (_, thinkAPI) => {
  try {
    await axios.post('/users/logout');
    toastMessage.logoutSuccess();
    clearAuthHeader();
  } catch (error) {
    console.log('error:', error);
    toastMessage.logoutError(error);
    return thinkAPI.rejectWithValue(error.message);
  }
});

//!   refresh
export const refresh = createAsyncThunk('auth/refresh', async (_, thinkAPI) => {
  const { auth } = thinkAPI.getState();

  if (auth.token === null) {
    toastMessage.refreshNoToken();
    return thinkAPI.rejectWithValue();
  }
  setAuthHeader(auth.token);
  try {
    const { data } = await axios.get('/users/current');

    toastMessage.refreshSuccess(data);

    return data;
  } catch (error) {
    toastMessage.refreshError(error);
    return thinkAPI.rejectWithValue(error.message);
  }
});
