import { AuthNav, Navigation, UserMenu } from "components";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { WrapNav } from "./AppBar.style";


export const AppBar = () => {

 const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <WrapNav>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </WrapNav>
  );
};
