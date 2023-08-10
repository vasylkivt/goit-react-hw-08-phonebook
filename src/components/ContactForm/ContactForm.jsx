import { Formik } from 'formik';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { contactFormScheme } from './FormValidation';
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

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);

  const inputNameRef = useRef();

  const onSubmit = (formData, action) => {
    if (
      contactList.find(
        ({ name }) => name.toLowerCase() === formData.name.toLowerCase()
      )
    ) {
      toast.error(`${formData.name}  is already in contacts. `);
      return;
    }
    if (contactList.find(({ phone }) => phone === formData.phone)) {
      toast.error(`Number "${formData.phone}" is already in contacts. `);
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
          phone: '',
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
                name="phone"
                required
              />
              <InputName>Phone number</InputName>
              {errors.phone && touched.phone && (
                <InvalidInput>{errors.phone}</InvalidInput>
              )}
            </InputWrap>

            <Button type="submit">Add contact</Button>
          </FormStyled>
        )}
      </Formik>
    </>
  );
};
