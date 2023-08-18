import { useAuth } from 'hooks';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { token } = useAuth();

  return token ? <Component /> : <Navigate to={redirectTo} replace />;
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
