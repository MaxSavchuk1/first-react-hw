import React from 'react';
import { Form, Formik, Field } from 'formik';
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
    joinAs: 'buyer',
    isSpamming: false,
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

          <label className={styles.roleSelect}>
            <Field type='radio' name='joinAs' value='buyer' />
            <p>Join As a Buyer</p>
            <p>
              I am looking for a Name, Logo or Tagline for my business, brand or
              product.
            </p>
          </label>
          <label className={styles.roleSelect}>
            <Field type='radio' name='joinAs' value='seller' />
            <p>Join As a Creative or Marketplace Seller</p>
            <p>
              I plan to submit name ideas, Logo designs or sell names in Domain
              Marketplace.
            </p>
          </label>
          <label className={styles.allowSpam}>
            <Field type='checkbox' name='isSpamming' />
            <p>
              Allow Squadhelp to send marketing/promotional offers from time to
              time
            </p>
          </label>

          <button type='submit'>Create account</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegistrationForm;
