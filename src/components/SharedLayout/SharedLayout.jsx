import { AppBar } from 'components';
import { Outlet } from 'react-router-dom';
import { Container, Footer, Header, Section } from './SharedLayout.style';
import { Suspense } from 'react';

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
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Section>
        </Container>
      </main>

      <Footer></Footer>
    </>
  );
};
