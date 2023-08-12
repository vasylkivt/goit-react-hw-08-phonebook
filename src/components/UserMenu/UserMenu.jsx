import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';
import { WrapUserMenu } from './UserMenu.style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <WrapUserMenu>
      <p>{userName.name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </WrapUserMenu>
  );
};
