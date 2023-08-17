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
      thinkAPI.rejectWithValue(error.message);
    }
  }
);

//!  action login
export const login = createAsyncThunk(
  'auth/login',
  async (loginData, thinkAPI) => {
    try {
      const { data } = await axios.post('/users/login', loginData);
      // toastMessage.registerSuccess(data);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      console.log('error:', error);
      // toastMessage.registerError(error);
      thinkAPI.rejectWithValue(error.message);
    }
  }
);

//!  action logout

export const logout = createAsyncThunk('auth/logout', async (_, thinkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    // toastMessage.registerSuccess(data);
    clearAuthHeader();
    return data;
  } catch (error) {
    console.log('error:', error);
    // toastMessage.registerError(error);
    thinkAPI.rejectWithValue(error.message);
  }
});

//!  action refresh

export const refresh = createAsyncThunk('auth/refresh', async (_, thinkAPI) => {
  const { auth } = thinkAPI.getState();

  if (auth.token === null) {
    return thinkAPI.rejectWithValue();
  }
  setAuthHeader(auth.token);
  try {
    const { data } = await axios.get('/users/current');

    // toastMessage.registerSuccess(data);

    return data;
  } catch (error) {
    // toastMessage.registerError(error);
    thinkAPI.rejectWithValue(error.message);
  }
});
