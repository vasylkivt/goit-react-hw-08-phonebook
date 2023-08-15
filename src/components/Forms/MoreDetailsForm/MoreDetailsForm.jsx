import { useContacts } from 'hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations, contactsSlice } from 'redux/contacts';
import { ButtonEdit, FormStyled, MoreDetailsWrap } from './MoreDetails.style';
import { AiFillEdit } from 'react-icons/ai';
import {
  Button,
  InputName,
  InputStyled,
  InputWrap,
  InvalidInput,
  PersonIcon,
  TelephoneIcon,
} from 'components';
import { contactFormScheme, isAlreadyOnList } from './FormValidation';
import { Formik } from 'formik';

export const MoreDetailsForm = () => {
  const [isEdit, setIsEdit] = useState(false);
  console.log('isEdit:', isEdit);
  const dispatch = useDispatch();
  const { loading, editedContact, contacts } = useContacts();

  

  const onSubmit = formData => {
    if (isAlreadyOnList(editedContact.id, contacts, formData)) {
      return;
    }
    dispatch(contactsOperations.updateContact(editedContact.id, formData));
  };

  const initialName = editedContact.name;
  const initialNumber = editedContact.number;

  return (
    <MoreDetailsWrap>
      <Formik
        enableReinitialize
        initialValues={{
          name: initialName,
          number: initialNumber,
        }}
        onSubmit={onSubmit}
        validationSchema={contactFormScheme}
      >
        {({ errors, touched }) => (
          <FormStyled>
            <InputWrap>
              <PersonIcon />
              <InputStyled
                disabled={!isEdit}
                autoComplete="off"
                type="text"
                name="name"
                required
              />
              {isEdit && <InputName>Contact name</InputName>}
              {errors.name && touched.name && (
                <InvalidInput>{errors.name}</InvalidInput>
              )}
            </InputWrap>
            <InputWrap>
              <TelephoneIcon />
              <InputStyled
                disabled={!isEdit}
                autoComplete="off"
                type="tel"
                name="number"
                required
              />
              {isEdit && <InputName>Phone number</InputName>}
              {errors.number && touched.number && (
                <InvalidInput>{errors.number}</InvalidInput>
              )}
            </InputWrap>

            {isEdit && <Button type="submit">Edit contact</Button>}
          </FormStyled>
        )}
      </Formik>
      <ButtonEdit onClick={() => setIsEdit(prev => !prev)} type="button">
        <AiFillEdit />
      </ButtonEdit>
    </MoreDetailsWrap>
  );
};
