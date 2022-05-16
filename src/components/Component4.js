import React, { useContext } from "react";
import { UserContext } from "./../context/UserContext";

const Component4 = () => {
const { noOfQuestionsSolved, codingStreak } = useContext(UserContext);

return (
	<div>
	<h2>Component4</h2>
	<h3>
	Your favourite Player : </h3> <h3>{noOfQuestionsSolved}
	</h3>
	<h3>{codingStreak} </h3>
	</div>
);
};

export default Component4;
