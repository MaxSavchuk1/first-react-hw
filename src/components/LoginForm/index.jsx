import React from 'react';
import { Form, Formik } from 'formik';
import Input from '../Input';
import { LOGIN_SCHEMA } from '../../utils/validationSchemas';
import styles from './LoginForm.module.scss';

function LoginForm () {
  const initialValues = {
    email: '',
    password: '',
  };

  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <div>
      <h2>login to your account</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={LOGIN_SCHEMA}
      >
        <Form>
          <Input name='email' type='email' placeholder='E-mail' />
          <Input name='password' type='password' placeholder='Password' />
          <button type='submit'>LOGIN</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
