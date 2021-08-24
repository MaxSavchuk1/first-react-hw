import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email('Input correct email')
    .required('Field cannot be empty'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[0-9].*).{8,32}$/,
      'Min 8 characters; A-Z, a-z, 0-9'
    )
    .required('Field cannot be empty'),
});

export const SIGNUP_SCHEMA = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-Z]\w+$/, 'Input correct name')
    .min(1)
    .max(100)
    .required('Field cannot be empty'),
  lastName: yup
    .string()
    .matches(/^([A-Za-z][-a-z.']+[ ]*)+$/, 'Input your last name in English')
    .min(1)
    .max(100)
    .required('Field cannot be empty'),
  displayName: yup
    .string()
    .matches(/^[A-Za-z]\w+$/, 'Input correct name')
    .min(1)
    .max(100)
    .required('Field cannot be empty'),
  email: yup
    .string()
    .email('Input correct email')
    .required('Field cannot be empty'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[0-9].*).{8,32}$/,
      'Min 8 characters; A-Z, a-z, 0-9'
    )
    .required('Field cannot be empty'),
  passwordConfirm: yup
    .string()
    .required('Confirm your password')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
