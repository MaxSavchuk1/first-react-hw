import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './SignUpForm.module.scss';

class SignUpForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      isCorrectName: false,
    };
  }

  submitCancel = e => {
    e.preventDefault();
  };

  inputChangeHndlr = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  inputNameHndlr = e => {
    this.setState({
      name: e.target.value,
      isCorrectName: /^[A-Z][a-z]{1,25}$/.test(e.target.value),
    });
  };

  render () {
    const { name, email, password, isCorrectName } = this.state;

    const nameStyle = classNames(styles.inputs, {
      [isCorrectName ? styles.valid : styles.invalid]: name,
    });

    return (
      <form onSubmit={this.submitCancel} className={styles.signUpForm}>
        <label className={styles.formLabel}>
          Name
          <input
            type='text'
            className={nameStyle}
            value={name}
            onChange={this.inputNameHndlr}
            required
          />
        </label>
        <label className={styles.formLabel}>
          Email
          <input
            type='email'
            value={email}
            name='email'
            onChange={this.inputChangeHndlr}
          />
        </label>
        <label className={styles.formLabel}>
          Password
          <input
            type='password'
            value={password}
            name='password'
            onChange={this.inputChangeHndlr}
            required
          />
        </label>
        <button type='submit'>Sign up</button>
      </form>
    );
  }
}
export default SignUpForm;
