import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

export const scheme = {
  name: Yup.string().required('Name is required!'),
  email: Yup.string()
    .email(
      `The email address must be in Latin and must contain @ and the text after it. For example: poshta@gameil.com`
    )
    .required('Mail is required!'),
  password: Yup.string()
    .required('Password required!')
    .min(7, 'The password must be at least 7 characters long')
    .max(20, 'Password should not exceed 20 characters'),

  number: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    )
    .required('The number is required!')
    // .min(7, 'The number must be at least 7 digits')
    .max(12, 'The number should be no more than 12 digits'),
};

export const isAlreadyOnList = (editedId, list, data) => {
  if (
    list.find(({ name, id }) => {
      if (id === editedId) return false;
      return name.toLowerCase() === data.name.toLowerCase();
    })
  ) {
    toast.error(`${data.name}  is already in contacts. `);
    return true;
  }

  if (
    list.find(({ number, id }) => {
      if (id === editedId) return false;

      return number === data.number;
    })
  ) {
    toast.error(`Number "${data.number}" is already in contacts. `);
    return true;
  }
};
