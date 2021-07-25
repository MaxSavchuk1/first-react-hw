import React from "react";
import { format, getDaysInMonth, getDay, getMonth, getYear } from "date-fns";

function Month(props) {
  const { date } = props;

  const currentMonth = getMonth(date);
  const currentYear = getYear(date);
  let firstDay = getDay(new Date(currentYear, currentMonth, 1));
  const monthLength = getDaysInMonth(date);
  const monthArray = Array(42).fill("");

  for (let i = 1; i <= monthLength; i++) {
    monthArray[firstDay] = i;
    firstDay++;
  }

  const creationTable = (el, index) => <td key={index}>{el}</td>;

  const monthTable = [];
  for (let i = 0; i < monthArray.length; i = i + 7) {
    monthTable.push(
      <tr key={i}>{monthArray.map(creationTable).slice(i, i + 7)}</tr>
    );
  }

  console.log(monthTable);

  return (
    <table>
      <caption>{format(date, "MMMM y")}</caption>
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
      <tbody>{monthTable}</tbody>
    </table>
  );
}

export default Month;
