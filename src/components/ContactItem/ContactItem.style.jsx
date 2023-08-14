import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  position: relative;
  padding: 4px 10px;

  align-items: center;
  border-radius: 6px;
  box-shadow: 0 0 1px 0 ${({ theme }) => theme.colors.accent};
  background-color: rgba(0, 0, 0, 0.105);
`;

export const TextWrap = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
  max-width: 180px;
`;

export const MoreDetailsWrap = styled.div`
  position: absolute;
  min-height: 100px;
  top: 0;
  z-index: 2;
  width: 80%;
  padding: 15px;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.black}90;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(15px);

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
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

export const ButtonDel = styled(Button)`
  &:hover {
    background: ${({ theme }) => theme.colors.red};
  }
  margin-left: 10px;
`;

export const ButtonEdit = styled(Button)`
  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
  }
  margin-left: auto;
`;

export const MoreDetails = styled(Button)`
  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }
  margin-left: auto;
`;
