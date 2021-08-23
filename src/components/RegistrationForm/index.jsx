import React from 'react';
import { Form, Formik } from 'formik';
import Input from '../Input';
// import {} from '../../utils/validationSchemas';

function RegistrationForm () {
  const initialValues = {};

  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      // validationSchema={}
    >
      <Form>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <button type='submit'>REGISTER</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
