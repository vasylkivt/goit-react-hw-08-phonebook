import { useAuth } from 'hooks';

import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const location = useLocation();
  console.log('location:', location);

  const { isLoggedIn, isRefreshing } = useAuth();
  console.log('isRefreshing:', isRefreshing);
  console.log('isLoggedIn:', isLoggedIn);

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} replace />;
};
