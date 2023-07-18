import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/Image/Image20230419000207.png";
import './Header.css'
import { UserContext } from "../../context/UserContext";

const Header = () => {
	const [userData,setuserData] = useContext(UserContext);
	console.log(userData)
const logout = () => {
	setuserData({
		token: undefined,
		user: undefined,
	});
};


	return (
		<>
			<div className="headWrapper fixed-top">
				<nav className="row py-3 mainWrapper text-center mx-auto">
					<Link className="col text-start">
						<a href="#"></a>
						<img className="imageSize" src={img2} alt="" />
					</Link>
					<div className="row col text-end">
						<div className="col">
							<a href="#">Home</a>
						</div>
						<div className="col">
							<a href="#">How it works</a>
						</div>
						<Link to="/login" className="col">
							<button onClick={logout} className="signIn">
							 { userData.user ? "Log out" : "Sign In"}
							</button>
						</Link>
					</div>
				</nav>
			</div>
			{/* <div
				style={{ height: "100px", backgroundColor: "black", color: "white" }}
			>
				<h1>EVANGADI</h1>
				<Link to="/login">
					<button>Sign IN</button>
				</Link>
			</div> */}
		</>
	);
};

export default Header;
