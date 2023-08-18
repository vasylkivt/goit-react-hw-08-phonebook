import styled from 'styled-components';

export const Wrap = styled.div`
  width: 420px;
  height: 420px;
  padding: 30px 20px;

  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
`;
export const GritWrap = styled.div`
  display: grid;
  grid-template-areas:
    'img text'
    'btn btn';
  gap: 30px 0;
  grid-template-columns: 40% 1fr;
`;

export const Image = styled.img`
  grid-area: img;
`;

export const TextWrap = styled.div`
  grid-area: text;
  display: grid;
  align-content: center;
  background: #00000055;
  padding: 20px 20px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
export const Text = styled.p`
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.white)};
  max-width: 800px;

  font-size: ${({ $fontSize }) => (!$fontSize ? '18px' : $fontSize)};
  margin-bottom: 10px;
  line-height: 1.4;
  font-weight: 400;
`;

export const Button = styled.button`
  grid-area: btn;
  margin: auto;
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
