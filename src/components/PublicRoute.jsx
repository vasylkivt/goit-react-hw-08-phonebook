import { useAuth } from 'hooks';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component, redirectTo }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : <Component />;
};

PublicRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
