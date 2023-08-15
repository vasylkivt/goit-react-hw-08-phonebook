import styled from 'styled-components';
import { Form } from 'formik';

export const MoreDetailsWrap = styled.div`
  position: absolute;
  min-height: 100px;
  top: 120px;
  right: 20px;
  z-index: 2;
  width: 70%;
  padding: 30px 30px 30px 60px;
  display: flex;
  gap: 35px;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.black}90;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(15px);
`;
export const FormStyled = styled(Form)`
  z-index: 2;

  display: flex;
  gap: 35px;
  flex-direction: column;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
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
  left: 10px;
  top: 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
  }
  margin-left: auto;
`;
