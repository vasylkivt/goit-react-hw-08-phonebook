import { Navigation } from 'components';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Footer,
  Header,
  HeaderWrap,
  Section,
} from './SharedLayout.style';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
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
