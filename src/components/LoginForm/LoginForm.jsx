import { Formik } from 'formik';

import {
  Button,
  FormStyled,
  InputName,
  InputStyled,
  InputWrap,
  PersonIcon,
  TelephoneIcon,
  Title,
} from 'components';

import { useDispatch/* , useSelector */ } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isLoggedIn = useSelector(selectIsLoggedIn);


  // if (isLoggedIn) {
  //   return navigate('/contacts', { replace: true });
   
  // }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        dispatch(login(values));
      }}
    >
      <FormStyled>
        <Title>Login</Title>
        <InputWrap>
          <PersonIcon />
          <InputStyled autoComplete="off" type="text" name="email" required />
          <InputName>Email</InputName>
        </InputWrap>
        <InputWrap>
          <TelephoneIcon />
          <InputStyled autoComplete="off" type="tel" name="password" required />
          <InputName>Password</InputName>
        </InputWrap>

        <Button type="submit">Login</Button>
      </FormStyled>
    </Formik>
  );
};
