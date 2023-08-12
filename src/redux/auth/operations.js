import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//! action register
const registerPen = () => ({ type: 'auth/register.pen' });
const registerFul = data => ({ type: 'auth/register.ful', payload: data });
const registerRej = () => ({ type: 'auth/register.rej' });

export const register = regData => async dispatch => {
  try {
    dispatch(registerPen());
    const { data } = await axios.post('/users/signup', regData);

    dispatch(registerFul(data));
  } catch (error) {
    dispatch(registerRej(error));
  }
};

//!  action login
const loginPen = () => ({ type: 'auth/login.pen' });
const loginFul = data => ({ type: 'auth/login.ful', payload: data });
const loginRej = () => ({ type: 'auth/login.rej' });

export const login = logData => async dispatch => {
  try {
    dispatch(loginPen());
    const { data } = await axios.post('/users/login', logData);
    setAuthHeader(data.token);
    dispatch(loginFul(data));
  } catch (error) {
    dispatch(loginRej(error));
  }
};

//!  action logout

const logoutPen = () => ({ type: 'auth/logout.pen' });
const logoutFul = () => ({ type: 'auth/logout.ful' });
const logoutRej = () => ({ type: 'auth/logout.rej' });

export const logout = () => async dispatch => {
  try {
    dispatch(logoutPen());
     await axios.post('/users/logout');
   
    clearAuthHeader();
    dispatch(logoutFul());
  } catch (error) {
    dispatch(logoutRej(error));
  }
};
