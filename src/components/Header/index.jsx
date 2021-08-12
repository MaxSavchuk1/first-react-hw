import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className={styles.header}>
			<Link to="/">Home</Link>
			<Link to="/components">Components</Link>
		</div>
	);
}

export default Header;
