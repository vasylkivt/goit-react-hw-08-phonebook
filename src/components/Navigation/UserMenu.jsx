import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import { useAuth } from 'hooks';
import { Button } from 'components';
import { StyledLink, UserName } from './Nav.style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <StyledLink to="/profile">User Profile</StyledLink>
      <UserName to="/profile">{user.name}</UserName>
      <Button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </Button>
    </>
  );
};
