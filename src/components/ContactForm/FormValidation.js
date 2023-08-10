import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

export const contactFormScheme = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40),
  phone: Yup.string().matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    'Phone number is not valid'
  ),
});

export const isAlreadyOnList = (list, data) => {
  if (list.find(({ name }) => name.toLowerCase() === data.name.toLowerCase())) {
    toast.error(`${data.name}  is already in contacts. `);
    return true;
  }

  if (list.find(({ phone }) => phone === data.phone)) {
    toast.error(`Number "${data.phone}" is already in contacts. `);
    return true;
  }
};
