import { useAuth } from 'hooks';

import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { token } = useAuth();

  return token ? <Component /> : <Navigate to={redirectTo} replace />;
};
