import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import styles from './RegistrationPage.module.scss';

function RegistrationPage () {
  return (
    <div className={styles.regFormContainer}>
      <h2>CREATE AN ACCOUNT</h2>
      <h4>We always keep your name and email address private.</h4>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
