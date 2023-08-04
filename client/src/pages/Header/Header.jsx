
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/Image/Image20230419000207.png";
import "./Header.css";
import { UserContext } from "../../context/UserContext";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
	const [userData, setUserData] = useContext(UserContext);

	const logout = () => {
		setUserData({
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
					<Container fluid>
						<Navbar.Brand href="#">
							<img src={img2} alt="Evangadi Logo" />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton />
							<Offcanvas.Body className="bg-orange">
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<Nav.Link to="/login" className="pt-3">
										Home
									</Nav.Link>
									<Nav.Link href="#" className="pt-3 me-4">
										How it Works
									</Nav.Link>
									<Nav.Link to="/login">
										<Button onClick={logout} className="signIn">
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
