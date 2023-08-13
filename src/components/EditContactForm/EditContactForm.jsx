import { Formik } from 'formik';

import { useDispatch } from 'react-redux';

import { contactFormScheme, isAlreadyOnList } from './FormValidation';
import {
  Button,
  FormStyled,
  InputName,
  InputStyled,
  InputWrap,
  InvalidInput,
  PersonIcon,
  TelephoneIcon,
  Title,
} from 'components';

import { updateContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks';

export const EditContactForm = () => {
  const { contacts, editedContact } = useContacts();
  const dispatch = useDispatch();

  const initialName = editedContact.name;
  const initialNumber = editedContact.number;

  const onSubmit = formData => {
    if (isAlreadyOnList(editedContact.id, contacts, formData)) {
      return;
    }
    dispatch(updateContact(editedContact.id, formData));
  };

  return (
    <>
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
            <Title>Edit contact</Title>
            <InputWrap>
              <PersonIcon />
              <InputStyled
                autoComplete="off"
                type="text"
                name="name"
                required
              />
              <InputName>Contact name</InputName>
              {errors.name && touched.name && (
                <InvalidInput>{errors.name}</InvalidInput>
              )}
            </InputWrap>
            <InputWrap>
              <TelephoneIcon />
              <InputStyled
                autoComplete="off"
                type="tel"
                name="number"
                required
              />
              <InputName>Phone number</InputName>
              {errors.number && touched.number && (
                <InvalidInput>{errors.number}</InvalidInput>
              )}
            </InputWrap>

            <Button type="submit">Edit contact</Button>
          </FormStyled>
        )}
      </Formik>
    </>
  );
};
