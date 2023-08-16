import { AppBar, Container, RotateLoaderWrap, Section } from 'components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RotateLoader } from 'react-spinners';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />

      <main>
        <Suspense
          fallback={
            <RotateLoaderWrap>
              <RotateLoader margin={60} size={50} color="#2A9D8F" />
            </RotateLoaderWrap>
          }
        >
          <Container>
            <Section>
              <Outlet />
            </Section>
          </Container>
        </Suspense>
      </main>
    </>
  );
};
