import * as Yup from 'yup';

export const loginSchema = Yup.object()
  .shape({
    usernameOrEmail: Yup.string().required("Username or email can't be empty"),
    password: Yup.string().required("Password can't be empty"),
  })
  .required();

export const signUpSchema = Yup.object()
  .shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().when('password', {
      is: (val: [string]) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match'),
    }),
  })
  .required();
