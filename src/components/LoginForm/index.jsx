import React from 'react';
import { Form, Formik } from 'formik';
import Input from '../Input';
import { LOGIN_SCHEMA } from '../../utils/validationSchemas';

function LoginForm () {
  const initialValues = {
    email: '',
    password: '',
  };

  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={LOGIN_SCHEMA}
    >
      <Form>
        <Input name='email' type='email' label='E-mail' />
        <Input name='password' type='password' label='Password' />
        <button type='submit'>LOGIN</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
