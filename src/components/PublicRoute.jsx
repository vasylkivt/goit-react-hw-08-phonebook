import { useAuth } from 'hooks';

import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ component: Component, redirectTo }) => {
  const location = useLocation();
  console.log('location:', location);
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : <Component />;
};
