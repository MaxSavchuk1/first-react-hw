import React from "react";
import { format } from "date-fns";
import styles from "./Day.module.scss";

function Day() {
	const currentDate = new Date();
	return (
		<section className={styles.dayContainer}>
			<div>{format(currentDate, "eeee")}</div>
			<div>{currentDate.getDate()}</div>
		</section>
	);
}

export default Day;
