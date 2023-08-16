import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//! action Get all user contacts
const getAllContactsInProgress = () => ({
  type: 'contacts/getAllContacts.pending',
});
const getAllContactsSuccess = data => ({
  type: 'contacts/getAllContacts.fulfilled',
  payload: data,
});
const getAllContactsError = () => ({
  type: 'contacts/getAllContacts.rejected',
});

export const getAllContacts = () => async dispatch => {
  try {
    dispatch(getAllContactsInProgress());
    const { data } = await axios.get('/contacts');

    dispatch(getAllContactsSuccess(data));
  } catch (error) {
    dispatch(getAllContactsError(error));
  }
};

//! action add contact
const addContactProgress = () => ({
  type: 'contact/addContact.pending',
});
const addContactSuccess = data => ({
  type: 'contact/addContact.fulfilled',
  payload: data,
});
const addContactError = () => ({
  type: 'contact/addContact.rejected',
});

export const addContact = contact => async dispatch => {
  try {
    dispatch(addContactProgress());
    const { data } = await axios.post('/contacts', contact);
 toast.success(`${contact.name} added to your contact list.`);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

//! action delete contact
const deleteContactProgress = () => ({
  type: 'contact/deleteContact.pending',
});
const deleteContactSuccess = data => ({
  type: 'contact/deleteContact.fulfilled',
  payload: data,
});
const deleteContactError = () => ({
  type: 'contact/deleteContact.rejected',
});

export const deleteContact =
  ({ id, name }) =>
  async dispatch => {
    try {
      dispatch(deleteContactProgress());
      const { data } = await axios.delete(`/contacts/${id}`);
      toast.success(`${name} deleted from your contacts list.`);
      dispatch(deleteContactSuccess(data));
    } catch (error) {
      dispatch(deleteContactError(error));
    }
  };

//! update an existing contact
const updateContactProgress = () => ({
  type: 'contact/updateContact.pending',
});
const updateContactSuccess = data => ({
  type: 'contact/updateContact.fulfilled',
  payload: data,
});
const updateContactError = () => ({
  type: 'contact/updateContact.rejected',
});

export const updateContact = (id, userData) => async dispatch => {
  try {
    dispatch(updateContactProgress());
    const { data } = await axios.patch(`/contacts/${id}`, userData);
    dispatch(updateContactSuccess(data));
  } catch (error) {
    dispatch(updateContactError(error));
  }
};
