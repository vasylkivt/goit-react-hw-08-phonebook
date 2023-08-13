import { useSelector } from 'react-redux';

import { selectContacts, selectEditContact, selectEditedContact, selectError, selectLoading } from 'redux/contacts/selectors';



export const useContacts = () => {
 const contacts = useSelector(selectContacts)
const loading = useSelector(selectLoading)
const error = useSelector(selectError)
const editContact  = useSelector(selectEditContact )
const editedContact = useSelector(selectEditedContact)

  return {
    contacts,
loading,
error,
editContact ,
editedContact
  };
};
