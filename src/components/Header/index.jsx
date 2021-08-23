import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/components'>Components</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
