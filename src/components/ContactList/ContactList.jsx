import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { List, ListWrap } from './ContactList.style';
import { ContactItem, Filter, Notification } from 'components';

import { getAllContacts } from 'redux/contacts/operations';
import { useAuth, useContacts, useFilter } from 'hooks';

export const ContactList = () => {
  const { contacts, loading, error } = useContacts();
  const { visibleContacts } = useFilter();
  const { isLoggedIn } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch, isLoggedIn]);

  const isContactEmpty = contacts.length === 0;
  const isVisibleContactsEmpty = visibleContacts.length === 0;

  return (
    <ListWrap>
      {!isContactEmpty && <Filter />}

      <List>
        {visibleContacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </List>

      {!loading && !isContactEmpty && isVisibleContactsEmpty && (
        <Notification>
          There are no contacts here with that name… 🧐 enter a new name ✍️ .
        </Notification>
      )}

      {!error && !loading && isContactEmpty && (
        <Notification $margin="auto">
          No contacts...🥲. Add your first contact ☎️ .
        </Notification>
      )}

      {loading && (
        <Notification $position={'absolute'}>Loading... 🕐</Notification>
      )}

      {error && <Notification>{error}... 😢😢😢</Notification>}
    </ListWrap>
  );
};
