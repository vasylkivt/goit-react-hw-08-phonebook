import { NavLink } from 'react-router-dom';
import { NavWrap } from './Navigation.style';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrap>
      <NavLink to="/">PHONEBOOK</NavLink>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavWrap>
  );
};
