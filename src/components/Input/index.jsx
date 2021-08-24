import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';
import styles from './Input.module.scss';
import 'animate.css';

function Input (props) {
  const [field, meta] = useField(props);
  const { error, touched } = meta;

  const animationOnInvalid = 'animate__animated animate__headShake';

  const inputClass = classNames(
    styles.input,
    {
      [styles.invalid]: error && touched,
      [styles.valid]: !error && touched,
    },
    {
      [animationOnInvalid]: error && touched,
    }
  );

  return (
    <div className={styles.inputContainer}>
      <input {...field} {...props} className={inputClass} />
    </div>
  );
}

export default Input;
