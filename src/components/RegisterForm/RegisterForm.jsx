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

export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <FormStyled>
        <Title>Sing up</Title>
        <InputWrap>
          <PersonIcon />
          <InputStyled autoComplete="off" type="text" name="name" required />
          <InputName>Name</InputName>
        </InputWrap>
        <InputWrap>
          <TelephoneIcon />
          <InputStyled autoComplete="off" type="email" name="email" required />
          <InputName>Email</InputName>
        </InputWrap>
        <InputWrap>
          <TelephoneIcon />
          <InputStyled
            autoComplete="off"
            type="text"
            name="password"
            required
          />
          <InputName>Password</InputName>
        </InputWrap>

        <Button type="submit">Sing up</Button>
      </FormStyled>
    </Formik>
  );
};
