import React, { Component } from "react";
import { getYear, getMonth } from "date-fns";
import styles from "./SelectForm.module.scss";

class SelectForm extends Component {
	constructor(props) {
		super(props);

		const { date } = props;

		this.state = {
			monthValue: getMonth(date),
			yearValue: getYear(date),
		};
	}

	sumbitHndlr = (e) => {
		e.preventDefault();
	};

	dateChangeHndlr = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	resetHndlr = (e) => {
		const currentMonth = getMonth(new Date());
		const currentYear = getYear(new Date());
		this.setState({ monthValue: currentMonth, yearValue: currentYear });
		this.props.dateChange(currentYear, currentMonth);
	};

	render() {
		const { monthValue, yearValue } = this.state;
		const { dateChange } = this.props;
		return (
			<form
				onSubmit={this.sumbitHndlr}
				onChange={this.dateChangeHndlr}
				className={styles.selectContainer}
			>
				<select
					name="monthValue"
					value={monthValue}
					onChange={this.dateChangeHndlr}
				>
					<option value="0">January</option>
					<option value="1">February</option>
					<option value="2">March</option>
					<option value="3">April</option>
					<option value="4">May</option>
					<option value="5">June</option>
					<option value="6">July</option>
					<option value="7">August</option>
					<option value="8">September</option>
					<option value="9">October</option>
					<option value="10">November</option>
					<option value="11">December</option>
				</select>
				<input
					name="yearValue"
					type="number"
					value={yearValue}
					min="1"
					max="9999"
					onChange={this.dateChangeHndlr}
				/>
				<button
					type="submit"
					onClick={() => {
						dateChange(yearValue, monthValue);
					}}
				>
					Select
				</button>
				<button onClick={this.resetHndlr}>Reset</button>
			</form>
		);
	}
}

export default SelectForm;
