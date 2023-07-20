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

import { Form, Button, Col } from "react-bootstrap";

const SignUp = () => {
	const [userData, setuserData] = useContext(UserContext);
	const [form, setform] = useState({});
	const navigate = useNavigate();
	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
	};

	console.log(userData);
	console.log(form)
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
					paddingTop: "130px",
					paddingBottom: "170px",
				}}
			>
				<div className="sign-up-container  col-md">
					<h1>Join the network</h1>
					<p>
						Already have an account?
						<span
							onClick={() => {
								navigate("/login");
							}}
							style={{
								color: "orange",
								cursor: "pointer",
							}}
						>
							Sign in
						</span>
					</p>

					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="email">
							<Form.Control
								type="Email "
								className="hakimm py-2 mt-2 form-control"
								name="email"
								placeholder="Email"
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<div className="row">
							<Form.Group controlId="firstName" className="col-md">
								<Form.Control
									type="text "
									className="hakimm py-2 mt-2 form-control"
									name="firstName"
									placeholder="First Name"
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<Form.Group controlId="lastName" className="col-md">
								<Form.Control
									type="text "
									className="hakimm py-2 mt-2 form-control"
									name="lastName"
									placeholder="Last Name"
									onChange={handleChange}
									required
								/>
							</Form.Group>
						</div>
						<Form.Group controlId="userName">
							<Form.Control
								type="text "
								className="hakimm py-2 mt-2 form-control"
								name="userName"
								placeholder="User Name"
								onChange={handleChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="password">
							<Form.Control
								type="Password "
								className="hakimm py-2 mt-2 form-control"
								name="password"
								placeholder="Password"
								onChange={handleChange}
								required
							/>
						</Form.Group>
						
							<Button
								onSubmit={handleSubmit}
								variant="primary"
								type="submit"
								className="mt-2 agree_andjoin"
							>
								Agree and join
							</Button>
						

						<small className="px-4 d-flex justify-content-center text-center py-3">
							I agree to the
							<a href="" className="color_orange">
								{" "}
								privacy policy
							</a>{" "}
							and
							<a href="" className="color_orange">
								{" "}
								terms of service.
							</a>
						</small>
					</Form>
					<Link to="/login" className="color_orange">
						{" "}
						Already have an account?{" "}
					</Link>
				</div>
			</div>
		</>
	);
};

export default SignUp;
