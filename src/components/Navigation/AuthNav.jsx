import { StyledNavLink } from './Nav.style';

export const AuthNav = () => {
  return (
    <>
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </>
  );
};
