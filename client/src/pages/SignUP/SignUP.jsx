import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import axios from "../../axios";
import Header from "../Header/Header";
import "./SignUP.css";
import Container from "react-bootstrap/Container";
import bg from "../../assets/Image/bg-svg-f.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { Form, Button, Col, Row } from "react-bootstrap";

const SignUp = () => {
	const [userData, setuserData] = useContext(UserContext);
	const [form, setform] = useState({});
	const navigate = useNavigate();
	const [passwordVisible, setPasswordVisible] = useState(false);
	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
	};

	const passwordchange = () => {
		setPasswordVisible(!passwordVisible);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/users", form);
			alert("Successfully signed up! Please log in with your new account.");
			navigate("/login");
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
						<div className="login_container_signUp col-sm-12 col-md shadow">
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
									<Form.Group controlId="firstName " className="col-md">
										<Form.Control
											type="text"
											className="p-3 mt-3 "
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
									<span onClick={passwordchange}>
										{" "}
										<input
											type={passwordVisible ? "text" : "password"}
											className="p-3 mt-3 form-control"
											name="password"
											placeholder="Password"
											onChange={handleChange}
										/>{" "}
										<i
											style={{
												position: "relative",
												top: "-40px",
												left: "85%",
												cursor: "pointer",
											}}
										>
											{passwordVisible ? (
												<VisibilityOffIcon />
											) : (
												<VisibilityIcon />
											)}
										</i>
									</span>
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
									variant="primary"
									type="submit"
									className="signUp_Btn"
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
