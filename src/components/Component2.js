import React from "react";
import Component4 from "./Component4";
import { mainStyle } from "./../App";

const Component2 = () => {
return (
	<div style={mainStyle}>
	<h2>Component-2</h2>
	<p>How you doin ?</p>
	<Component4 />
	</div>
);
};

export default Component2;
