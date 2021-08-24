import React from 'react';
import classNames from 'classnames';
import styles from './HomePage.module.scss';
import 'animate.css';

function HomePage () {
  const animationOnLoad = [
    'animate__animated animate__bounceInDown animate__delay-1s',
    'animate__animated animate__bounceInUp animate__delay-2s',
  ];
  const homePageSlassesFirst = classNames(
    styles.homePageContentFirst,
    animationOnLoad[0]
  );
  const homePageSlassesSecond = classNames(
    styles.homePageContentSecond,
    animationOnLoad[1]
  );

  return (
    <>
      <div className={homePageSlassesFirst}>Hello, world!</div>
      <div className={homePageSlassesSecond}>This is my first React app</div>
    </>
  );
}

export default HomePage;
