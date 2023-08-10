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

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{ name: '', password: '' }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <FormStyled>
        <Title>Login</Title>
        <InputWrap>
          <PersonIcon />
          <InputStyled autoComplete="off" type="text" name="name" required />
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
