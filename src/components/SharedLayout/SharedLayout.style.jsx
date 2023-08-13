import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  gap: 20px;
  height: calc(100vh - 100px);
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Header = styled.header`
  padding: 15px 0;

  min-height: 50px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  backdrop-filter: blur(15px);
`;

export const Footer = styled.footer`
  height: 50px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  backdrop-filter: blur(15px);
`;
