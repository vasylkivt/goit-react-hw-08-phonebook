import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

import { WrapUserMenu } from './UserMenu.style';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapUserMenu>
      <Link to="/profile">{user.name}</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </WrapUserMenu>
  );
};
