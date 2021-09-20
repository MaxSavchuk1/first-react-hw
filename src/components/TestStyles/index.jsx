import React from 'react';
import classNames from 'classnames';
import styles from './TestStyles.module.scss';
import 'animate.css';

/***
 *
 *
 * то, что здесь и в стилях написано, это "подкапотная" реализация :D
 * не обращайте внимания на названия переменных
 *
 *
 */

function TestStyles () {
  const animLoad = 'animate__animated animate__zoomIn';
  const superStyles = [
    classNames(styles.test, styles.delay1, animLoad),
    classNames(styles.test, styles.delay2, animLoad),
    classNames(styles.test, styles.delay3, animLoad),
    classNames(styles.test, styles.delay4, animLoad),
    classNames(styles.test, styles.delay5, animLoad),
    classNames(styles.test, styles.delay6, animLoad),
    classNames(styles.test, styles.delay7, animLoad),
    classNames(styles.test, styles.delay8, animLoad),
    classNames(styles.test, styles.delay9, animLoad),
    classNames(styles.test, styles.delay10, animLoad),
    classNames(styles.test, styles.delay11, animLoad),
    classNames(styles.test, styles.delay12, animLoad),
    classNames(styles.test, styles.delay13, animLoad),
    classNames(styles.test, styles.delay14, animLoad),
    classNames(styles.test, styles.delay15, animLoad),
    classNames(styles.test, styles.delay16, animLoad),
    classNames(styles.test, styles.delay17, animLoad),
    classNames(styles.test, styles.delay18, animLoad),
    classNames(styles.test, styles.delay19, animLoad),
    classNames(styles.test, styles.delay20, animLoad),
  ];

  const divsArray = [];
  let i = 0;
  do {
    divsArray.push(<div key={Math.random()} className={superStyles[i]}></div>);
    i++;
    if (i === 20) {
      i = 0;
    }
  } while (divsArray.length < 240);

  return <div className={styles.container}>{divsArray}</div>;
}

export default TestStyles;
