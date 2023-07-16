import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div
				style={{ height: "100px", backgroundColor: "black", color: "white" }}
			>
				<h1>EVANGADI</h1>
				<Link to="/login">
					<button>Sign IN</button>
				</Link>
			</div>
		</>
	);
};

export default Header;
