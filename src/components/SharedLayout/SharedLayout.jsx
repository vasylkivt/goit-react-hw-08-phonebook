import { Navigation } from 'components';
import { NavLink, Outlet } from 'react-router-dom';
import { Header, Section } from './SharedLayout.style';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <NavLink to="/">PHONEBOOK</NavLink>
        <Navigation />
      </Header>

      <Section>
        <Outlet />
      </Section>
    </>
  );
};
