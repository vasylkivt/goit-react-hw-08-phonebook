import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { PrivateRoute, PublicRoute, SharedLayout } from 'components';
import { toastOptions } from 'styles';

import { refresh } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const UserProfile = lazy(() => import('pages/UserProfile'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />

            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute component={UserProfile} redirectTo="/login" />
              }
            />
            <Route
              path="/login"
              element={<PublicRoute component={Login} redirectTo="/contacts" />}
            />
            <Route
              path="/register"
              element={
                <PublicRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        <Toaster toastOptions={toastOptions} />
      </>
    )
  );
};
