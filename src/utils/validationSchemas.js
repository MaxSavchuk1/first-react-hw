import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email()
    .required('is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[0-9].*).{8,32}$/,
      'is required field. Min 8 characters; must contain at least one uppercase, one lowercase letter and one digit'
    )
    .required(),
});
