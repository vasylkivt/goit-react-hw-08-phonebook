import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const editContact = contact => ({
  type: 'contacts/editContact',
  payload: contact,
});

export const contactReducer = (
  state = {
    items: [],
    isLoading: false,
    error: null,
    visibleEditContact: false,

    editedContact: null,
  },
  action
) => {
  switch (action.type) {
    case 'contacts/editContact':
      return {
        ...state,
        visibleEditContact:
          action.payload.id === state.editedContact?.id ? false : true,
        editedContact:
          action.payload.id === state.editedContact?.id ? null : action.payload,
      };;

    case 'contacts/getAllContacts.pending':
      return {
        ...state,
        items: [],
        isLoading: true,
        error: null,
      };
    case 'contacts/getAllContacts.fulfilled':
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
        error: null,
      };
    case 'contacts/getAllContacts.rejected':
      return {
        ...state,
        items: [],
        isLoading: false,
        error: action.payload,
      };

    //!add
    case 'contact/addContact.pending':
      return {
        ...state,
        items: [...state.items],
        isLoading: true,
        error: null,
      };
    case 'contact/addContact.fulfilled':
      return {
        ...state,
        items: [action.payload, ...state.items],
        isLoading: false,
        error: null,
      };
    case 'contact/addContact.rejected':
      return {
        ...state,
        items: [...state.items],
        isLoading: false,
        error: action.payload,
      };

    //! del
    case 'contact/deleteContact.pending':
      return {
        ...state,
        items: [...state.items],
        isLoading: true,
        error: null,
      };
    case 'contact/deleteContact.fulfilled':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),

        isLoading: false,
        error: null,
      };
    case 'contact/deleteContact.rejected':
      return {
        ...state,
        items: [...state.items],
        isLoading: false,
        error: action.payload,
      };

    //! update
    case 'contact/updateContact.pending':
      return {
        ...state,
        items: [...state.items],
        isLoading: true,
        error: null,
      };
    case 'contact/updateContact.fulfilled':
      return {
        ...state,
        items: state.items.map(item =>
          item.id !== action.payload.id ? item : action.payload
        ),
        visibleEditContact: false,
        editedContact: null,
        isLoading: false,
        error: null,
      };
    case 'contact/updateContact.rejected':
      return {
        ...state,
        items: [...state.items],
        isLoading: false,
        error: action.payload,
      };

    //! def
    default:
      return state;
  }
};
