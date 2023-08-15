import styled from 'styled-components';


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
