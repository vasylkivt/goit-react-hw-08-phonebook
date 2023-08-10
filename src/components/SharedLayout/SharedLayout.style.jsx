import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;

  display: flex;
  gap: 20px;

  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  position: sticky;

  height: 50px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  backdrop-filter: blur(15px);
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;
