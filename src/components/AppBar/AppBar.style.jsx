import styled from 'styled-components';

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Header = styled.header`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  backdrop-filter: blur(15px);
`;
