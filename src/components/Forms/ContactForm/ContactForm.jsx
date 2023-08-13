import { Formik } from 'formik';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);
  const inputNameRef = useRef();

  const onSubmit = (formData, action) => {
    if (isAlreadyOnList(contactList, formData)) {
      return;
    }
    dispatch(addContact(formData));
    action.resetForm();
    inputNameRef.current.focus();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={onSubmit}
        validationSchema={contactFormScheme}
      >
        {({ errors, touched }) => (
          <FormStyled>
            <Title>Add contact</Title>
            <InputWrap>
              <PersonIcon />
              <InputStyled
                innerRef={el => {
                  inputNameRef.current = el;
                }}
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

            <Button type="submit">Add contact</Button>
          </FormStyled>
        )}
      </Formik>
    </>
  );
};
