import React from 'react';
import { Form, Formik, Field } from 'formik';
import { Link } from 'react-router-dom';
import Input from '../Input';
import { LOGIN_SCHEMA } from '../../utils/validationSchemas';
import styles from './LoginForm.module.scss';

function LoginForm () {
  const initialValues = {
    email: '',
    password: '',
    isRemember: false,
  };

  const submitHandler = (values, formikBag) => {
    console.log(`values`, values);
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
          <div className={styles.options}>
            <label className={styles.remembering}>
              <Field type='checkbox' name='isRemember' />
              <p>Remember me</p>
            </label>
            <Link to='/register'>Forgot password?</Link>
          </div>
          <button type='submit'>LOGIN</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
