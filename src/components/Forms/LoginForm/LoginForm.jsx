import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import {
  Button,
  FormStyled,
  PersonIcon,
  StyledLink,
  Title,
  Text,
  PasswordIcon,
} from 'components';

import { Input } from '../Input';
import { authOperations } from 'redux/auth';

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        dispatch(authOperations.login(values));
      }}
    >
      <FormStyled>
        <Title>Login</Title>

        <Input icon={<PersonIcon />} type="text" name="email" label="Email" />

        <Input
          icon={<PasswordIcon />}
          type="password"
          name="password"
          label="Password"
        />

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
