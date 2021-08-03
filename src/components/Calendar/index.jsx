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
		};
	}

	dateChange = (yearValue, monthValue) => {
		this.setState({ date: new Date(yearValue, monthValue) });
	};

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
