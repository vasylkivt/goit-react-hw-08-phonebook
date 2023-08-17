import { AppBar, Container, RotateLoaderWrap, Section } from 'components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { BarLoader, RotateLoader } from 'react-spinners';
import { useAuth } from 'hooks';

export const SharedLayout = () => {
  const { isLoading } = useAuth();
  return (
    <>
      <AppBar />
      <BarLoader
        loading={isLoading}
        color="#2A9D8F"
        width="100%"
        speedMultiplier={0.5}
        cssOverride={{ position: 'absolute' }}
      />
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
