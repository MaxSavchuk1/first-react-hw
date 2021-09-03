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
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={LOGIN_SCHEMA}
      >
        <Form>
          <Input name='email' type='email' placeholder='E-mail' />
          <Input name='password' type='password' placeholder='Password' />
          <div className={styles.stubElement}>
            <span>Remember me?</span>
            <span>Forgot password?</span>
          </div>
          <button type='submit'>LOGIN</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
