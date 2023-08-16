import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastMessage } from 'utils/toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//! Get all contacts
export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//! add contact
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      toastMessage.add(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//! delete contact
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id, name }, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      toastMessage.remove(name);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//! update contact
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ([editedContact, updateData], thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `/contacts/${editedContact.id}`,
        updateData
      );
      toastMessage.update(editedContact, updateData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
