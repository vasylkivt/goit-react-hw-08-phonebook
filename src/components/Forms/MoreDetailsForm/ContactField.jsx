import { ErrorMessage } from 'formik';
import { InputName,  InputWrap, InvalidInput } from '../Form.style';
import { ButtonEdit, InputStyled } from './MoreDetails.style';
import { AiFillEdit } from 'react-icons/ai';

export const ContactField = ({ icon, name, label, isEdit, setIsEdit }) => (
  <InputWrap>
    {icon}
    <InputStyled
      disabled={!isEdit}
      autoComplete="off"
      type={name === 'number' ? 'tel' : 'text'}
      name={name}
      required
    />
    {isEdit && <InputName>{label}</InputName>}
    <ErrorMessage name={name} component={InvalidInput} />
    <ButtonEdit
      id="editButton"
      onClick={() => setIsEdit(prev => !prev)}
      type="button"
    >
      <AiFillEdit />
    </ButtonEdit>
  </InputWrap>
);
