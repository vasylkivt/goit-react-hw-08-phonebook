
import { AuthNav, Navigation, UserMenu } from "components";
import { WrapNav } from "./AppBar.style";
import { useAuth } from "hooks";


export const AppBar = () => {

   const { isLoggedIn } = useAuth();


  return (
    <WrapNav>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </WrapNav>
  );
};
