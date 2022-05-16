import React, { useContext } from "react";
import { UserContext } from "./../context/UserContext";

const Component5 = () => {
const { email, contactNumber } = useContext(UserContext);

return (
	<div>
	<h2>Component5</h2>
	<h3>Email </h3>
	<h3>{email}</h3>
	<h3>Contact Number</h3> <h3> {contactNumber} </h3>
	</div>
);
};

export default Component5;
