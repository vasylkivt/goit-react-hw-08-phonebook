import { AppBar, Container, Section } from 'components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { BarLoader } from 'react-spinners';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Container>
          <Section>

            <Suspense
              fallback={
                <BarLoader
                  color="#2A9D8F"
                  width="100%"
                  speedMultiplier={0.5}
                />
              }
            >
              <Outlet />
            </Suspense>
          </Section>
        </Container>
      </main>
    </>
  );
};
