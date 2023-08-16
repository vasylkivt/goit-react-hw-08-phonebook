export const editContact = contact => ({
  type: 'contacts/editContact',
  payload: contact,
});
export const closeModal = () => ({
  type: 'contacts/closeModal',
});
