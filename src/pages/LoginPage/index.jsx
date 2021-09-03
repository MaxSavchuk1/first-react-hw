import React from 'react';
import LoginForm from '../../components/LoginForm';
import styles from './LoginPage.module.scss';

function LoginPage () {
  return (
    <div className={styles.loginFormContainer}>
      <h2>login to your account</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
