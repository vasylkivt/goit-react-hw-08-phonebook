import { AuthNav, Container, MainNav, UserMenu } from 'components';
import { Header, NavWrap, Wrap } from './AppBar.style';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <NavWrap>
          <Wrap>
            <MainNav />
          </Wrap>
          <Wrap>{!isLoggedIn ? <AuthNav /> : <UserMenu />}</Wrap>
        </NavWrap>
      </Container>
    </Header>
  );
};
