import React from 'react';
import LoginForm from '../../components/LoginForm';
import styles from './LoginPage.module.scss';

function LoginPage () {
  return (
    <div className={styles.loginFormContainer}>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
