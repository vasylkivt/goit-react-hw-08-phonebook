import { Formik } from 'formik';

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
import { selectContacts, selectEditedContact } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/operations';

export const EditContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);
  const editedContact = useSelector(selectEditedContact);
  const initialName = editedContact.name;
  const initialNumber = editedContact.number;

  const onSubmit = formData => {
    if (isAlreadyOnList(editedContact.id, contactList, formData)) {
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
                // value={initialName}
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
                // value={initialNumber}
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
