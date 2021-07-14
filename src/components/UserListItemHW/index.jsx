import React from "react";

function UserListItem(props) {
	const {
		user: { id, firstName, lastName, age, imgSrc },
		del,
	} = props;

	const selectedStyle = { boxShadow: "0px 0px 10px red" };

	return (
		<li>
			<img src={imgSrc} alt={id} />
			<div className="userInfo">
				<span>
					{firstName} {lastName}
				</span>
				<span>{age} years old</span>
			</div>
			<button onClick={del}>X</button>
		</li>
	);
}

export default UserListItem;
