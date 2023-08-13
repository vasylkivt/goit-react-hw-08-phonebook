import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Button } from 'components';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <Link to="/profile">{user.name}</Link>
      <Button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </Button>
    </>
  );
};
