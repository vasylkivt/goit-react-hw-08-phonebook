import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

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

import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  
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
