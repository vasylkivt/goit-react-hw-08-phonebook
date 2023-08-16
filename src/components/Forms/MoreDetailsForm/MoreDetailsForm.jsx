import { Formik } from 'formik';
import { useCloseModalOnEscape, useContacts } from 'hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { contactsOperations, contactsSlice } from 'redux/contacts';
import { ButtonClose, FormStyled, MoreDetailsWrap } from './MoreDetails.style';
import { Button, PersonIcon, TelephoneIcon } from 'components';
import { contactFormScheme, isAlreadyOnList } from './FormValidation';
import { GrFormClose } from 'react-icons/gr';
import { ContactField } from './ContactField';
import { toast } from 'react-hot-toast';

export const MoreDetailsForm = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { editedContact, contacts } = useContacts();
  const dispatch = useDispatch();
  const initialName = editedContact.name;
  const initialNumber = editedContact.number;

  useCloseModalOnEscape(dispatch);

  const onSubmit = formData => {
    const { name, number } = formData;
    const updateData = {};
    let message = '';

    if (isAlreadyOnList(editedContact.id, contacts, formData)) return;
    if (name !== editedContact.name) updateData.name = name;
    if (number !== editedContact.number) updateData.number = number;
    if (Object.keys(updateData).length === 0) {
      dispatch(contactsSlice.closeModal());
      return;
    }

    if (updateData.name) {
      message += `'${editedContact.name}' changed to '${updateData.name}' \n`;
    }
    if (updateData.number) {
      message += `'${editedContact.number}' changed to '${updateData.number}' \n`;
    }

    toast.success(message);

    dispatch(contactsOperations.updateContact(editedContact.id, updateData));
  };

  return (
    <>
      <MoreDetailsWrap id="modal">
        <Formik
          enableReinitialize
          initialValues={{
            name: initialName,
            number: initialNumber,
          }}
          onSubmit={onSubmit}
          validationSchema={contactFormScheme}
        >
          {() => (
            <FormStyled>
              <ContactField
                icon={<PersonIcon />}
                name="name"
                label="Contact name"
                isEdit={isEdit}
                setIsEdit={setIsEdit}
              />

              <ContactField
                icon={<TelephoneIcon />}
                name="number"
                label="Phone number"
                isEdit={isEdit}
                setIsEdit={setIsEdit}
              />
              {isEdit && <Button type="submit">Edit contact</Button>}
            </FormStyled>
          )}
        </Formik>

        <ButtonClose
          id="editButton"
          onClick={() => dispatch(contactsSlice.closeModal())}
          type="button"
        >
          <GrFormClose />
        </ButtonClose>
      </MoreDetailsWrap>
    </>
  );
};
