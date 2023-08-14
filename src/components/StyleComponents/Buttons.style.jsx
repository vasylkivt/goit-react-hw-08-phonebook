import styled from 'styled-components';

export const Button = styled.button`
  margin: 0 auto;
  padding: 10px 25px;
  border-radius: 40px;
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  transition: background 250ms ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;
