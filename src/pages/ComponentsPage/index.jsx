import React from 'react';
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import Calendar from '../../components/Calendar';
import NotFound from '../../components/NotFound';
import SignUpForm from '../../components/SignUpForm';
import UserList from '../../components/UserList';
import styles from './ComponentsPage.module.scss';

function ComponentsPage () {
  let { path, url } = useRouteMatch();

  return (
    <div className={styles.componentsContainer}>
      <ul className={styles.linkList}>
        <li>
          <Link to={`${url}/calendar`}>Calendar</Link>
        </li>
        <li>
          <Link to={`${url}/signup-form`}>Sign up form</Link>
        </li>
        <li>
          <Link to={`${url}/userlist`}>Userlist</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path={`${path}/calendar`}>
            <Calendar />
          </Route>
          <Route path={`${path}/signup-form`}>
            <SignUpForm />
          </Route>
          <Route path={`${path}/userlist`}>
            <UserList />
          </Route>
          <Route path={`${path}/*`} component={NotFound} />;
        </Switch>
      </div>
    </div>
  );
}

export default ComponentsPage;
