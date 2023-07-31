// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import img2 from "../../assets/Image/Image20230419000207.png";
// import img3 from "../../assets/Image/Abubeker.jpg";
// import "./Header.css";
// import { UserContext } from "../../context/UserContext";

// const Header = () => {
// 	const [userData, setuserData] = useContext(UserContext);

// 	const logout = () => {
// 		setuserData({
// 			token: undefined,
// 			user: undefined,
// 		});
// 	};

// 	return (
// 		<>
// 			<div className="headWrapper fixed-top">
// 				<nav className="row py-3 mainWrapper text-center mx-auto">
// 					<Link className="col text-start">
// 						<a href="#"></a>
// 						<img className="imageSize" src={img2} alt="" />
// 						{/* <img className="imageSize" src={img3} alt="" /> */}
// 					</Link>
// 					<div className="row col text-end">
// 						<div className="col">
// 							<a href="#">Home</a>
// 						</div>
// 						<div className="col">
// 							<a href="#">How it works</a>
// 						</div>
// 						<Link to="/login" className="col">
// 							<button onClick={logout} className="signIn">
// 								{userData.user ? "Log out" : "Sign In"}
// 							</button>
// 						</Link>
// 					</div>
// 				</nav>
// 			</div>
// 		</>
// 	);
// };

// export default Header;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/Image/Image20230419000207.png";
import img3 from "../../assets/Image/Abubeker.jpg";
import "./Header.css";
import { UserContext } from "../../context/UserContext";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
	const [userData, setuserData] = useContext(UserContext);

	const logout = () => {
		setuserData({
			token: undefined,
			user: undefined,
		});
	};

	return (
		<>
			{["lg"].map((expand) => (
				<Navbar
					key={expand}
					expand={expand}
					className="shadow-sm p-3 fixed-top bg-white"
				>
					<Container className="container" fluid>
						<Link to="/">
							<Navbar.Brand>
								<img src={img2} alt="Evangadi Logo" />
							</Navbar.Brand>
						</Link>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton></Offcanvas.Header>
							<Offcanvas.Body className="bg-orange">
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<Nav.Link to="/login" className="pt-3">
										Home
									</Nav.Link>
									<Nav.Link tos="#" className=" pt-3 me-4">
										How it Work
									</Nav.Link>
									<Nav.Link to="/login">
										<Button onClick={logout} className="signIn ">
											{userData.user ? "Log out" : "SIGN IN"}
										</Button>
									</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
};

export default Header;
