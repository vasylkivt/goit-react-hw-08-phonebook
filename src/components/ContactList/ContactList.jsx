import { useEffect } from 'react';
import { List, ListWrap } from './ContactList.style';
import { ContactItem, Filter, Notification } from 'components';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';
import { selectVisibleContacts } from 'redux/filter/selectors';
import { getAllContacts } from 'redux/contacts/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const isLoggedIn = useSelector(selectIsLoggedIn);

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
