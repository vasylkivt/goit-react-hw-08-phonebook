import { createSlice } from '@reduxjs/toolkit';

import {
  addContact,
  deleteContact,
  getAllContacts,
  updateContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  showModal: false,
  editedContact: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.showModal = payload.id === state.editedContact?.id ? false : true;
      state.editedContact =
        payload.id === state.editedContact?.id ? null : payload;
    },

    closeModal: state => {
      state.showModal = false;
      state.editedContact = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.pending, handlePending)
      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getAllContacts.rejected, handleRejected)

      //// add contact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = [payload, ...state.items];
      })
      .addCase(addContact.rejected, handleRejected)

      //// delete contact
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected)

      //// update contact
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.showModal = false;
        state.editedContact = null;
        state.items = state.items.map(item =>
          item.id !== payload.id ? item : payload
        );
      })
      .addCase(updateContact.rejected, handleRejected);
  },
});
