import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import {
  Button,
  FormStyled,
  InputName,
  InputStyled,
  InputWrap,
  PersonIcon,
  StyledLink,
  Title,
  Text,
  PasswordIcon,
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
          <PasswordIcon />
          <InputStyled autoComplete="off" type="password" name="password" required />
          <InputName>Password</InputName>
        </InputWrap>
        <Text>
          Don't have an account yet?{' '}
          <StyledLink to="/register">
            <u>Sign up.</u>
          </StyledLink>
        </Text>

        <Button type="submit">Login</Button>
      </FormStyled>
    </Formik>
  );
};
