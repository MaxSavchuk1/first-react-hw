import React from "react";
import { format, getDaysInMonth, getDay, getMonth, getYear } from "date-fns";
import styles from "./Month.module.scss";

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

	const creationTable = (el, i) => <td key={i}>{el}</td>;

	const newArray = [];
	for (let i = 0; i < monthArray.length; i = i + 7) {
		newArray.push(
			<tr key={i}>{monthArray.map(creationTable).slice(i, i + 7)}</tr>
		);
	}

	return (
		<section className={styles.monthContainer}>
			<table className={styles.monthTable}>
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
				<tbody>{newArray}</tbody>
			</table>
		</section>
	);
}

export default Month;
