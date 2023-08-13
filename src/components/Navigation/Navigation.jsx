import { NavLink } from 'react-router-dom';
import { NavWrap } from './Navigation.style';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <NavWrap>
      <NavLink to="/">PHONEBOOK</NavLink>
      <NavLink to="/">Home</NavLink>
    {isLoggedIn &&  <NavLink to="/contacts">Contacts</NavLink>}
    </NavWrap>
  );
};
