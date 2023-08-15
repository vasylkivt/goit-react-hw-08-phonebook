

import { useAuth } from 'hooks';
import { StyledLink, StyledNavLink } from './Nav.style';

export const MainNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <StyledLink to="/">PHONEBOOK</StyledLink>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </>
  );
};
