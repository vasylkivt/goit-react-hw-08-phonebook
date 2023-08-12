import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { SharedLayout } from 'components';
import { toastOptions } from 'styles';
// import { fetchContacts } from 'redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import { Contacts, Home, Login, Register } from 'pages';

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <Toaster toastOptions={toastOptions} />
    </>
  );
};
