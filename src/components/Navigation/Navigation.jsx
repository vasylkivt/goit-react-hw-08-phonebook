import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <NavLink to="/" end>
        Home
      </NavLink>
      {false ? (
        <></>
      ) : (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </>
  );
};
