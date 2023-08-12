import { AppBar } from 'components';
import { Outlet } from 'react-router-dom';
import { Container, Footer, Header, Section } from './SharedLayout.style';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>

      <main>
        <Container>
          <Section>
            <Outlet />
          </Section>
        </Container>
      </main>
      
      <Footer></Footer>
    </>
  );
};
