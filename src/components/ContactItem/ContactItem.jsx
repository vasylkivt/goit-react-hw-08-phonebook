import PropTypes from 'prop-types';

import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import { BsInfo } from 'react-icons/bs';
import {
  ButtonDel,
  ButtonEdit,
  Item,
  Text,
  TextWrap,
  MoreDetails,
  MoreDetailsWrap,
} from './ContactItem.style';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';
import { editContact } from 'redux/contacts/slice';
import { useContacts } from 'hooks';
import { useState } from 'react';
import { EditContactForm } from 'components';
import { selectEditContact } from 'redux/contacts/selectors';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const [visibleMoreDetails, setVisibleMoreDetails] = useState(false);
  // const [visibleEditContact, setVisibleEditContact] = useState(false);
    const visibleEditContact = useSelector(selectEditContact);
  const dispatch = useDispatch();
  const { loading } = useContacts();

  const handlerDeleteBtn = () => {
    dispatch(deleteContact(id));
  };
  const handlerUpdateBtn = () => {
  
    dispatch(editContact({ id, name, number }));
  };

  return (
    <>
      <Item>
        <TextWrap>
          <Text>{name}</Text>
          <Text>{number}</Text>
        </TextWrap>
        {visibleMoreDetails && (
          <MoreDetailsWrap>
            <div>
              <Text>{name}</Text>
              <Text>{number}</Text>
            </div>
            <ButtonEdit
              disabled={loading && 'disabled'}
              onClick={handlerUpdateBtn}
              type="button"
            >
              <AiFillEdit />
            </ButtonEdit>

            <ButtonDel
              disabled={loading && 'disabled'}
              onClick={handlerDeleteBtn}
              type="button"
            >
              <AiOutlineDelete />
            </ButtonDel>
          </MoreDetailsWrap>
        )}
        <MoreDetails
          type="button"
          onClick={() => setVisibleMoreDetails(prev => !prev)}
        >
          <BsInfo />
        </MoreDetails>
      </Item>
        {visibleEditContact && <EditContactForm />}
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
