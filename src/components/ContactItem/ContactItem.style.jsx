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
  max-width: 200px;
`;

export const Text = styled.p`
text-transform: capitalize;
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
  margin-left: auto;
`;

export const MoreDetails = styled(Button)`
  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }
margin-right: 10px;
`;
