import { AppBar, Container, Section } from 'components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Container>
          <Section>
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </Section>
        </Container>
      </main>
    </>
  );
};
