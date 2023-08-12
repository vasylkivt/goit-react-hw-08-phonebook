import { NavLink } from 'react-router-dom';
import { NavWrap } from './Navigation.style';

export const Navigation = () => {
  return (
    <NavWrap>
      <NavLink to="/">PHONEBOOK</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </NavWrap>
  );
};
