import React from "react";
import styles from "./UserListItem.module.scss";

function UserListItem(props) {
	const {
		user: { id, firstName, lastName, age, imgSrc, isSelected },
		del,
		select,
	} = props;

	const selectedStyle = { boxShadow: "0px 0px 10px red" };

	return (
		<li
			style={isSelected ? selectedStyle : null}
			onClick={select}
			className={styles.userCard}
		>
			<img src={imgSrc} alt={id} />
			<div className={styles.userInfo}>
				<span>
					{firstName} {lastName}
				</span>
				<span>{age} years old</span>
			</div>
			<button onClickCapture={del}>X</button>
		</li>
	);
}

export default UserListItem;
