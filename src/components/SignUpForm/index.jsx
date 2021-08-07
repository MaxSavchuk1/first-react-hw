import React, { Component } from "react";
import classNames from "classnames";
import styles from "./SignUpForm.module.scss";

class SignUpForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			password: "",
			isCorrectName: false,
		};
	}

	submitCancel = (e) => {
		e.preventDefault();
	};

	inputChangeHndlr = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { name, email, password, isCorrectName } = this.state;

		const nameStyle = classNames(
			styles.inputs,
			isCorrectName ? styles.valid : styles.invalid
		);

		return (
			<form onSubmit={this.submitCancel} className={styles.signUpForm}>
				<label className={styles.formLabel}>
					Name
					<input
						type="text"
						className={nameStyle}
						value={name}
						name="name"
						onChange={this.inputChangeHndlr}
					/>
				</label>
				<label className={styles.formLabel}>
					Email
					<input
						type="email"
						className={styles.inputs}
						value={email}
						name="email"
						onChange={this.inputChangeHndlr}
					/>
				</label>
				<label className={styles.formLabel}>
					Password
					<input
						type="password"
						className={styles.inputs}
						value={password}
						name="password"
						onChange={this.inputChangeHndlr}
					/>
				</label>
				<button>Sign up</button>
			</form>
		);
	}
}
export default SignUpForm;
