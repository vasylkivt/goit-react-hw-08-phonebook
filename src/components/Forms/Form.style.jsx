import styled from 'styled-components';
import { Field, Form } from 'formik';
import { BsPerson } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const FormStyled = styled(Form)`

  position: ${({ $position }) => (!$position ? 'relative' : $position)};

  width: 400px;
  padding: 50px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  display: flex;
  gap: 30px;
  max-height: 500px;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  position: relative;

  border-bottom: 2px solid #fff;
`;

export const InputName = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1em;
  pointer-events: none;
  transition: 0.5s;
`;

export const InputStyled = styled(Field)`
  height: 50px;
  background: transparent;
  border: none;
  outline: none;

  padding: 0 35px 0 5px;
  color: #fff;

  &:focus ~ label,
  &:valid ~ label {
    top: -5px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};

  font-size: 16px;

  line-height: 1.4;
  font-weight: 400;
`;
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};

  font-size: 16px;

  line-height: 1.4;
  font-weight: 400;
`;

//// Form elements ==================================
export const InvalidInput = styled.div`
  position: absolute;
  bottom: -25px;
  right: 10px;
  color: ${({ theme: { colors } }) => colors.red};
`;

export const PersonIcon = styled(BsPerson)`
  fill: ${({ theme }) => theme.colors.accent};
  position: absolute;
  right: 8px;
  top: 20px;
`;

export const TelephoneIcon = styled(AiOutlinePhone)`
  fill: ${({ theme }) => theme.colors.accent};
  position: absolute;
  right: 8px;
  top: 20px;
`;
