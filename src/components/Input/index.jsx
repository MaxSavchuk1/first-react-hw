import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

function Input (props) {
  const [field, meta] = useField(props);
  console.log('field :>> ', field);
  console.log('meta :>> ', meta);

  return <input {...field} {...props} />;
}

export default Input;
