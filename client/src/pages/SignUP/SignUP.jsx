import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import axios from "axios";
import Header from "../Header/Header";
import "./SignUP.css";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import bg from "../../assets/Image/bg-svg-f.svg";
import "./SignUp.css";

import { Form, Button, Col, Row } from "react-bootstrap";

const SignUp = () => {
	const [userData, setuserData] = useContext(UserContext);
	const [form, setform] = useState({});
	const navigate = useNavigate();
	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
	};

	// console.log(userData);
	// console.log(form);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:4500/api/users", form);
			alert("Successfully signed up! Please log in with your new account.");
			navigate("/login");
			// const loginRes = await axios.post(
			// 	"http://localhost:4500/api/users/login",
			// 	{ email: form.email, password: form.password }
			// );
			// setuserData({
			// 	token: loginRes.data.token,
			// 	user: loginRes.data.user,
			// });
			// localStorage.setItem("auth-token", loginRes.data.token);
			// navigate("/login");
		} catch (error) {
			console.log("problem", error.response.data.msg);
			alert(error.response.data.msg);
		}
	};
	return (
		<>
			<Header />

			<div
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					paddingTop: "180px",
					paddingBottom: "100px",
				}}
			>
				<Container>
					<Row>
						<div className="login_container col-sm-12 col-md shadow">
							<div className=" text-center mb-4">
								<h5>Join the network</h5>
								<p>
									Already have an account?
									<Link to="/login" className="create_new_acc">
										{" "}
										Sign in
									</Link>
								</p>
							</div>
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId="email">
									<Form.Control
										type="Email "
										className="p-3 mt-2 form-control"
										name="email"
										placeholder="Email address"
										onChange={handleChange}
										required
									/>
								</Form.Group>
								<div className="row">
									<Form.Group controlId="firstName">
										<Form.Control
											type="text"
											className="p-3 mt-3"
											name="firstName"
											placeholder="First name"
											onChange={handleChange}
											required
										/>
									</Form.Group>
									<Form.Group controlId="lastName" className="col-sm-12 col-md">
										<Form.Control
											type="text "
											className="p-3 mt-3"
											name="lastName"
											placeholder="Last name"
											onChange={handleChange}
											required
										/>
									</Form.Group>
								</div>
								<Form.Group controlId="userName">
									<Form.Control
										type="text "
										className="p-3 mt-3"
										name="userName"
										placeholder="User name"
										onChange={handleChange}
										required
									/>
								</Form.Group>

								<Form.Group controlId="password">
									<Form.Control
										type="Password "
										className=" p-3 mt-3 form-control"
										name="password"
										placeholder="Password"
										onChange={handleChange}
										required
									/>
								</Form.Group>

								<small className="px-4  text-center py-3">
									I agree to the
									<Link to="" className="orange">
										{" "}
										privacy policy
									</Link>{" "}
									and
									<Link to="" className="orange">
										{" "}
										terms of service.
									</Link>
								</small>

								<Button
									// onSubmit={handleSubmit}
									variant="primary"
									type="submit"
									className=" signUp_Btn"
									style={{				
										border: "none",
									}}
								>
									Agree and join
								</Button>

								<Link to="/login" className="text-center create_new_acc mt-2">
									Already have an account?
								</Link>
							</Form>
						</div>

						<Col sm={12} md={6}>
							<div className="pt-5 px-4">
								<small style={{ color: "#f6912b" }}>About</small>
								<h1 className="mb-4">Evangadi Networks</h1>
								<p style={{ lineHeight: "30px" }}>
									No matter what stage of life you are in, whether you’re just
									starting elementary school or being promoted to CEO of a
									Fortune 500 company, you have much to offer to those who are
									trying to follow in your footsteps.
									<br />
									<br />
									Whether you are willing to share your knowledge or you are
									just looking to meet mentors of your own, please start by
									joining the network here.
								</p>
								<Button
									style={{
										backgroundColor: "#f6912b",
										border: "none",
									}}
								>
									HOW IT WORKS
								</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default SignUp;
