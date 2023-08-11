import { NavLink } from 'react-router-dom';
import { NavWrap, Wrap } from './Navigation.style';

export const Navigation = () => {
  return (
    <NavWrap>
      <Wrap>
        <NavLink to="/">PHONEBOOK</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </Wrap>
      <Wrap>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </Wrap>
    </NavWrap>
  );
};
