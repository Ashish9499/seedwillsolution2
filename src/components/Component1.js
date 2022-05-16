import React, { useContext } from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";
import { mainStyle } from "./../App";
import { UserContext } from "./../context/UserContext";

const Component1 = () => {
const { name } = useContext(UserContext);
return (
	<div>
	<div style={mainStyle}>
		<h2>Component1</h2>
		<h3>How are You {name} ?</h3>
	</div>
	<div style={{ display: "flex", justifyContent: "space-around" }}>
		<Component2 />
		<Component3 />
	</div>
	</div>
);
};

export default Component1;
