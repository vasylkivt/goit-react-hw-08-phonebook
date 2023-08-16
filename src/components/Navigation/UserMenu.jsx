import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import { useAuth } from 'hooks';
import { Button } from 'components';
import { StyledNavLink, UserName } from './Nav.style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <StyledNavLink to="/profile">User Profile</StyledNavLink>
      <UserName>{user.name}</UserName>
      <Button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </Button>
    </>
  );
};
