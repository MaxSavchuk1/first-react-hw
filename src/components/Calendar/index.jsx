import React, { Component } from "react";
import Day from "./Day";
import Month from "./Month";
import styles from "./Calendar.module.scss";
import SelectForm from "./SelectForm";

class Calendar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
			currentDate: new Date(), // это для подсветки текущего дня
		};
	}

	dateChange = (yearValue, monthValue) => {
		this.setState({ date: new Date(yearValue, monthValue) });
	};

	// дальше - плохой код
	componentDidMount() {
		const { date, currentDate } = this.state;
		const tds = document.getElementsByTagName("td");
		for (let i of tds) {
			if (
				i.innerText === currentDate.getDate().toString() &&
				date.getMonth() === currentDate.getMonth() &&
				date.getFullYear() === currentDate.getFullYear()
			) {
				i.style.backgroundColor = "grey";
			}
		}
	}

	componentDidUpdate(prevProps, prevState) {
		// работает после двухкратного нажатия ресет... потому что prevstate остается старым
		const { date, currentDate } = this.state;
		const tds = document.getElementsByTagName("td");
		if (
			prevState.date.getMonth() !== date.getMonth() ||
			prevState.date.getFullYear() !== date.getFullYear()
		) {
			for (let i of tds) {
				i.style.backgroundColor = "";
			}
		} else {
			for (let i of tds) {
				if (
					i.innerText === currentDate.getDate().toString() &&
					date.getMonth() === currentDate.getMonth() &&
					date.getFullYear() === currentDate.getFullYear()
				) {
					i.style.backgroundColor = "grey";
				}
			}
		}
	}
	// какая-то фигня получилась, гребаный стыд...
	render() {
		const { date } = this.state;
		return (
			<>
				<SelectForm date={date} dateChange={this.dateChange} />
				<article className={styles.calendarContainer}>
					<Day />
					<Month date={date} />
				</article>
			</>
		);
	}
}

export default Calendar;
