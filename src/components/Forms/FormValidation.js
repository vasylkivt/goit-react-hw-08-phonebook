import { toastMessage } from 'utils/toast';
import * as Yup from 'yup';

export const scheme = {
  name: Yup.string().required('Name is required!'),
  email: Yup.string()
    .email(
      `The email address must contain the @ symbol and text after it. For example: email@mail.com`
    )
    .required('EMail is required!'),
  password: Yup.string()
    .required('Password required!')
    .min(8, 'The password must be at least 8 characters long'),
  number: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    )
    .required('Phone number is required!'),
};

export const isAlreadyOnList = (list, data, editedId) => {
  if (
    list.find(({ name, id }) => {
      if (id === editedId) return false;
      return name.toLowerCase() === data.name.toLowerCase();
    })
  ) {
    toastMessage.addNameError(data);

    return true;
  }

  if (
    list.find(({ number, id }) => {
      if (id === editedId) return false;

      return number === data.number;
    })
  ) {
    toastMessage.addNumberError(data);

    return true;
  }
};
