import React from 'react';
import { Form, Formik } from 'formik';
import Input from '../Input';
import { SIGNUP_SCHEMA } from '../../utils/validationSchemas';

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
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={SIGNUP_SCHEMA}
    >
      <Form>
        <Input name='firstName' type='text' placeholder='First name' />
        <Input name='lastName' type='text' placeholder='Last name' />
        <Input name='displayName' type='text' placeholder='Display Name' />
        <Input name='email' type='email' placeholder='Email Address' />
        <Input name='password' type='password' placeholder='Password' />
        <Input
          name='passwordConfirm'
          type='password'
          placeholder='Password Confirmation'
        />
        <button type='submit'>Create account</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
