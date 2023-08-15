import PropTypes from 'prop-types';

import { BsInfo } from 'react-icons/bs';
import { Item, Text, TextWrap, MoreDetails, ButtonDel } from './ContactItem.style';


import { contactsOperations, contactsSlice } from 'redux/contacts';
import { useContacts } from 'hooks';
import { useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;


  const { loading } = useContacts();

  const handlerDeleteBtn = () => {
    dispatch(contactsOperations.deleteContact(id));
  };

  const handleInfoBtn = () => {
    dispatch(contactsSlice.editContact({ id, name, number }));
  };

  return (
    <>
      <Item>
        <MoreDetails type="button" onClick={handleInfoBtn}>
          <BsInfo />
        </MoreDetails>
        <TextWrap>
          <Text>{name}</Text>
          {/* <Text>{number}</Text> */}
        </TextWrap>

        <ButtonDel
          disabled={loading && 'disabled'}
          onClick={handlerDeleteBtn}
          type="button"
        >
          <AiOutlineDelete />
        </ButtonDel>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
