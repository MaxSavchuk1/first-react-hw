import React, { Component } from "react";
import classNames from "classnames";
import styles from "./SignUpForm.module.scss";

class SignUpForm extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	submitCancel = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.submitCancel} className={styles.signUpForm}>
				<label className={styles.formLabel}>
					Name
					<input type="text" className={styles.inputs} />
				</label>
				<label className={styles.formLabel}>
					Email <input type="email" className={styles.inputs} />
				</label>
				<label className={styles.formLabel}>
					Password <input type="password" className={styles.inputs} />
				</label>
				<button>Sign up</button>
			</form>
		);
	}
}
export default SignUpForm;
