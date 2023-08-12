import { NavLink } from "react-router-dom";
import { WrapAuthNav } from "./AuthNav.style";

export const AuthNav = () => {
  return (
    <WrapAuthNav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </WrapAuthNav>
  );
}