import React from 'react';
import { Form, Formik } from 'formik';
import Input from '../Input';
import { SIGNUP_SCHEMA } from '../../utils/validationSchemas';
import styles from './RegistrationForm.module.scss';

function RegistrationForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={SIGNUP_SCHEMA}
      >
        <Form>
          <div className={styles.inputsContainer}>
            <Input name='firstName' type='text' placeholder='First name' />
            <Input name='lastName' type='text' placeholder='Last name' />
          </div>
          <div className={styles.inputsContainer}>
            <Input name='displayName' type='text' placeholder='Display Name' />
            <Input name='email' type='email' placeholder='Email Address' />
          </div>
          <div className={styles.inputsContainer}>
            <Input name='password' type='password' placeholder='Password' />
            <Input
              name='passwordConfirm'
              type='password'
              placeholder='Password Confirmation'
            />
          </div>

          <button type='submit'>Create account</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegistrationForm;
