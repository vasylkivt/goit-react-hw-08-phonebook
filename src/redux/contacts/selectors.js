export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectShowModal = state => state.contacts.showModal;
export const selectEditedContact = state => state.contacts.editedContact;
