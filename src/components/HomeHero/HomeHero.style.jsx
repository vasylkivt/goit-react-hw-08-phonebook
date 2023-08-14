import styled from 'styled-components';

export const HeroWrap = styled.div`
  background: transparent;
  padding: 50px;
  border-radius: 20px;
  backdrop-filter: blur(15px);
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
  font-size: 44px;

  font-weight: 600;
`;
export const SubTitle = styled.h2`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.white};

  font-size: 34px;

  font-weight: 400;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  max-width: 800px;
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 1.4;
  font-weight: 400;
`;
export const ListWrap = styled.div``;
export const List = styled.ul`
 
`;
export const Item = styled.li`
  & ::before {
    content: '✦ ';
    margin-left: 16px;
  }
`;
