import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks';

export const MainNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavLink to="/">PHONEBOOK</NavLink>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </>
  );
};
