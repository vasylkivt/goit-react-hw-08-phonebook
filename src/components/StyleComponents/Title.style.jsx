import styled from 'styled-components';

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 26px;
  text-align: ${({ $textAlign }) => (!$textAlign ? '' : $textAlign)};
  margin: ${({ $margin }) => (!$margin ? '' : $margin)};
`;
