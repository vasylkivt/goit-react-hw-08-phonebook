import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';




export const contactReducer = (
  state = { items: [], isLoading: false, error: null },
  action
) => {
  return state;
};
