import { createReducer, isAllOf } from '@reduxjs/toolkit';
import { closeModal, openModal } from './actions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  showModal: false,
  editedContact: null,
};

export const contactReducer = createReducer(initialState, builder => {
  builder

    //// open Modal
    .addCase(openModal, (state, { payload }) => {
      state.showModal = payload.id === state.editedContact?.id ? false : true;
      state.editedContact =
        payload.id === state.editedContact?.id ? null : payload;
    })

    //// get all contact
    .addCase('contacts/getAllContacts.fulfilled', (state, { payload }) => {
      state.items = payload;
    })

    //// add contact
    .addCase('contact/addContact.fulfilled', (state, { payload }) => {
      state.items = [payload, ...state.items];
    })

    //// delete contact
    .addCase('contact/deleteContact.fulfilled', (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload.id);
    })

    //// update contact
    .addCase('contact/updateContact.fulfilled', (state, { payload }) => {
      state.items = state.items.map(item =>
        item.id !== payload.id ? item : payload
      );
    })

    .addMatcher(
      isAllOf(
        'contacts/getAllContacts.pending',
        'contact/addContact.pending',
        'contact/deleteContact.pending',
        'contact/updateContact.pending'
      ),
      state => {
        state.isLoading = true;
      }
    )
    .addMatcher(
      isAllOf(
        'contacts/getAllContacts.rejected',
        'contact/addContact.rejected',
        'contact/deleteContact.rejected',
        'contact/updateContact.rejected'
      ),
      (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }
    )
    .addMatcher(
      isAllOf(
        'contacts/getAllContacts.fulfilled',
        'contact/addContact.fulfilled',
        'contact/deleteContact.fulfilled',
        'contact/updateContact.fulfilled'
      ),
      state => {
        state.error = null;
        state.isLoading = false;
      }
    )
    .addMatcher(
      isAllOf(closeModal, 'contact/updateContact.fulfilled'),
      state => {
        state.showModal = false;
        state.editedContact = null;
      }
    );
});
