import { ContactForm, ContactList, EditContactForm } from 'components';

import { useSelector } from 'react-redux';
import { selectEditContact } from 'redux/contacts/selectors';

 const Contacts = () => {
  const visibleEditContact = useSelector(selectEditContact);

  return (
    <>
      <ContactForm />

      <ContactList />

      {visibleEditContact && <EditContactForm />}
    </>
  );
};
export default Contacts;
