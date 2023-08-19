import { BgFocus, InputName, InputStyled, InputWrap } from './Form.style';
import PropTypes from 'prop-types';
export const Input = ({ children, icon, type, name, label, ...inputAtr }) => {
  return (
    <>
      <InputWrap>
        {icon}
        <InputStyled
          {...inputAtr}
          autoComplete="off"
          type={type}
          name={name}
          placeholder="&nbsp;"
        />
        <InputName>{label}</InputName>
        {children}
        <BgFocus></BgFocus>
      </InputWrap>
    </>
  );
};

Input.propTypes = {
  icon: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputAtr: PropTypes.object,
};
