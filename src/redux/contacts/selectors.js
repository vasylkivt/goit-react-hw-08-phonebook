export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectEditContact = state => state.contacts.visibleEditContact;
export const selectEditedContact = state => state.contacts.editedContact;

