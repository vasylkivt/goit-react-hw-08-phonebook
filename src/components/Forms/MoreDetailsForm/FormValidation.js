import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

export const contactFormScheme = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40),
  number: Yup.string().matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    'Number is not valid'
  ),
});

export const isAlreadyOnList = (editedId,list, data) => {
 
 
  if (list.find(({ name, id }) => {
    if (id === editedId) return false;
    return name.toLowerCase() === data.name.toLowerCase()
  })) {
    toast.error(`${data.name}  is already in contacts. `);
    return true;
  }

  if (list.find(({ number, id }) => {
    if (id === editedId) return false;
    
    return number === data.number
  })) {
    toast.error(`Number "${data.number}" is already in contacts. `);
    return true;
  }
};
