import { BgFocus, InputName, InputStyled, InputWrap } from './Form.style';

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
          required
          placeholder="&nbsp;"
        />
        <InputName>{label}</InputName>
        {children}
        <BgFocus></BgFocus>
      </InputWrap>
    </>
  );
};
