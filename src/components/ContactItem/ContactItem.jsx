import PropTypes from 'prop-types';

import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';

import { ButtonDel, Item, Text, TextWrap } from './ContactItem.style';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { editContact } from 'redux/contacts/slice';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

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
        <ButtonDel
          disabled={loading && 'disabled'}
          onClick={handlerDeleteBtn}
          type="button"
        >
          <AiOutlineDelete />
        </ButtonDel>
        <button
          disabled={loading && 'disabled'}
          onClick={handlerUpdateBtn}
          type="button"
        >
          <AiFillEdit />
        </button>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
