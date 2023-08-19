import styled from 'styled-components';
import { Form } from 'formik';

export const MoreDetailsWrap = styled.div`
  position: absolute;
  min-height: 100px;
  top: 120px;
  right: 20px;
  z-index: 2;
  width: 70%;
  padding: 50px 30px 30px 60px;

  background: ${({ theme }) => theme.colors.black}90;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;

export const Title = styled.h2`
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 22px;
  top: 15px;
  left: 20px;
`;

export const FormStyled = styled(Form)`
  z-index: 2;

  display: flex;
  gap: 15px;
  flex-direction: column;

  & input {
    text-transform: capitalize;
  }
`;

export const Button = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 40px;
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;

  transition: background 250ms ease-in-out, fill 250ms ease-in-out;

  & svg {
    fill: ${({ theme }) => theme.colors.black};
    width: 20px;
    height: 20px;
    transition: fill 250ms ease-in-out;
  }
  &:hover svg {
    fill: #fff;
  }
`;

export const ButtonEdit = styled(Button)`
  position: absolute;
  left: -45px;
  top: 13px;
  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
  }
  margin-left: auto;
`;
export const ButtonClose = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 5px 5px;
  &:hover {
    background: ${({ theme }) => theme.colors.red};
  }
  margin-left: auto;
`;
