import { Formik } from 'formik';

import {
  Button,
  Title,
  FormStyled,
  PersonIcon,
  StyledLink,
  Text,
  PasswordIcon,
} from 'components';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Input } from '../Input';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={values => {
        dispatch(
          authOperations.register({
            ...values,
          })
        );
      }}
    >
      <FormStyled>
        <Title>Sign up</Title>

        <Input icon={<PersonIcon />} type="text" name="name" label="Name" />
        <Input icon={<PersonIcon />} type="email" name="email" label="Email" />

        <Input
          icon={<PasswordIcon />}
          type="password"
          name="password"
          label="Password"
        />

        <Text>
          Already have an account?{' '}
          <StyledLink to="/login">
            <u>Log in.</u>
          </StyledLink>
        </Text>

        <Button type="submit">Sign up</Button>
      </FormStyled>
    </Formik>
  );
};
