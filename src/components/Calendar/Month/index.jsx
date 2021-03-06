import React, { useEffect } from 'react';
import {
  format,
  getDaysInMonth,
  getDay,
  getMonth,
  getYear,
  isSameMonth,
  isSameYear,
  getDate,
} from 'date-fns';
import styles from './Month.module.scss';
import PropTypes from 'prop-types';

function Month (props) {
  const { date } = props;

  const currentMonth = getMonth(date);
  const currentYear = getYear(date);
  let firstDay = getDay(new Date(currentYear, currentMonth, 1));
  const monthLength = getDaysInMonth(date);
  const monthArray = Array(42).fill('');

  for (let i = 1; i <= monthLength; i++) {
    monthArray[firstDay] = i;
    firstDay++;
  }

  const creationTable = (el, i) => <td key={i}>{el}</td>;

  const fullMonth = [];
  for (let i = 0; i < monthArray.length; i = i + 7) {
    fullMonth.push(
      <tr key={i}>{monthArray.map(creationTable).slice(i, i + 7)}</tr>
    );
  }

  useEffect(() => {
    const daysInMonth = document.getElementsByTagName('td');
    for (let i of daysInMonth) {
      if (
        Number(i.innerText) === getDate(new Date()) &&
        isSameMonth(date, new Date()) &&
        isSameYear(date, new Date())
      ) {
        i.style.backgroundColor = 'grey';
      } else {
        i.style.backgroundColor = '';
      }
    }
  });

  return (
    <section className={styles.monthContainer}>
      <table className={styles.monthTable}>
        <caption>{format(date, 'MMMM y')}</caption>
        <thead>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>{fullMonth}</tbody>
      </table>
    </section>
  );
}

Month.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Month;
