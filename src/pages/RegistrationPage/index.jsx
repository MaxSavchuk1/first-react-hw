import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import styles from './RegistrationPage.module.scss';

function RegistrationPage () {
  return (
    <div className={styles.regFormContainer}>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
