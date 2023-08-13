import { useAuth } from 'hooks';
import React from 'react';

import { Navigate } from 'react-router-dom';



export const PrivateRoute = ({ children }) => {
 const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? children : <Navigate to="/login" replace />}</>;
};
