import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { WrapUserMenu } from './UserMenu.style';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  return (
    <WrapUserMenu>
      <Link to="/profile">{userName.name}</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </WrapUserMenu>
  );
};
