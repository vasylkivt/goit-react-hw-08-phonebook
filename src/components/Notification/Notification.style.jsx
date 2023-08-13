import styled from 'styled-components';

export const Notification = styled.p`
  position: ${({ $position }) => (!$position ? 'relative' : $position)};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 22px;
  line-height: 1.6;
  max-width: ${({ $maxWidth }) => (!$maxWidth ? ' 260px' : $maxWidth)};

  text-align: ${({ $textAlign }) => (!$textAlign ? 'center' : $textAlign)};
  margin: ${({ $margin }) => (!$margin ? '0 auto' : $margin)};
`;
