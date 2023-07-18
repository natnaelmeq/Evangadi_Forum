import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import axios from "axios";
import Header from "../Header/Header";
import './SignUP.css'
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import bg from "../../assets/Image/bg-svg-f.svg";

import { Form, Button, Col } from "react-bootstrap";
import "./SignUp.css";

const SignUp = () => {
	const [userData, setuserData] = useContext(UserContext);
	const [form, setform] = useState({});
	const navigate = useNavigate();
	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:4500/api/users", form);
			const loginRes = await axios.post(
				"http://localhost:4500/api/users/login",
				{ email: form.email, password: form.password }
			);
			setuserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
			});
			localStorage.setItem("auth-token", loginRes.data.token);
			navigate("/");
		} catch (error) {
			console.log("problem", error.response.data.msg);
			alert(error.response.data.msg);
		}
	};
	return (
		<>
			<Header />
			<h1>SignUp</h1>

			<form onSubmit={handleSubmit} action="" id="newForm">
				<div class="">
					<div>
						<input
							onChange={handleChange}
							id="email"
							type="email"
							placeholder="Email address"
						/>
					</div>
					<div class="row">
						<div class="col-md">
							<input
								onChange={handleChange}
								id="firstName"
								type="text"
								placeholder="First name"
							/>
						</div>
						<div class="col-md">
							<input
								onChange={handleChange}
								id="lastName"
								type="text"
								placeholder="Last name"
							/>
						</div>
					</div>

					<div>
						<input
							onChange={handleChange}
							id="Password"
							type="password"
							placeholder="Password"
						/>
					</div>

					<div class="form-group forHide">
						<p class="term-policy text-muted small">
							I agree to the
							<a href="#" class="orange">
								privacy policy
							</a>{" "}
							and
							<a href="#" class="orange">
								terms of service
							</a>
							.
						</p>
					</div>
				</div>

				<button type="submit" class="submitBtn my-4">
					Agree and Join
				</button>
			</form>
			<Link to="/login">Already have an account?</Link>
			{/* <div>
				<h1>SignUp</h1>
				<form onSubmit={handleSubmit} action="">
					<label htmlFor="">First Name:</label>
					<input type="text" name="firstName" onChange={handleChange} />
					<br />
					<label htmlFor="">Last Name:</label>
					<input type="text" name="lastName" onChange={handleChange} />
					<br />
					<label htmlFor="">User Name:</label>
					<input type="text" name="userName" onChange={handleChange} />
					<br />
					<label htmlFor="">Email:</label>
					<input type="text" name="email" onChange={handleChange} />
					<br />
					<label htmlFor="">Password:</label>
					<input type="text" name="password" onChange={handleChange} />
					<br />
					<button>Submit</button>
				</form>
				<Link to="/login">Already have an account?</Link>
			</div> */}
		</>
	);
};

export default SignUp;

<form action="" id="newForm">
	<div class="">
		<div>
			<input id="email" type="email" placeholder="Email address" />
		</div>
		<div class="row">
			<div class="col-md">
				<input id="firstName" type="text" placeholder="First name" />
			</div>
			<div class="col-md">
				<input id="lastName" type="text" placeholder="Last name" />
			</div>
		</div>

		<div>
			<input id="Password" type="password" placeholder="Password" />
		</div>

		<div class="form-group forHide">
			<p class="term-policy text-muted small">
				I agree to the
				<a href="#" class="orange">
					privacy policy
				</a>{" "}
				and
				<a href="#" class="orange">
					terms of service
				</a>
				.
			</p>
		</div>
	</div>

	<button type="submit" class="submitBtn my-4">
		Agree and Join
	</button>
</form>;

// <div className="sign-up-container  col-md">
// 	<h1>Join the network</h1>
// 	<p>
// 		Already have an account?
// 		<span
// 			onClick={() => {
// 				navigate("/login");
// 			}}
// 			style={{
// 				color: "orange",
// 				cursor: "pointer",
// 			}}
// 		>
// 			Sign in
// 		</span>
// 	</p>

// 	<Form onSubmit={handleSubmit}>
// 		<Form.Group controlId="email">
// 			<Form.Control
// 				type="Email "
// 				className="hakimm py-2 mt-2 form-control"
// 				name="Email"
// 				placeholder="Email"
// 				onChange={handleChange}
// 				required
// 			/>
// 		</Form.Group>
// 		<div className="row">
// 			<Form.Group controlId="firstName" className="col-md">
// 				<Form.Control
// 					type="text "
// 					className="hakimm py-2 mt-2 form-control"
// 					name="firstName"
// 					placeholder="First Name"
// 					onChange={handleChange}
// 					required
// 				/>
// 			</Form.Group>
// 			<Form.Group controlId="lastName" className="col-md">
// 				<Form.Control
// 					type="text "
// 					className="hakimm py-2 mt-2 form-control"
// 					name="lastName"
// 					placeholder="Last Name"
// 					onChange={handleChange}
// 					required
// 				/>
// 			</Form.Group>
// 		</div>
// 		<Form.Group controlId="userName">
// 			<Form.Control
// 				type="text "
// 				className="hakimm py-2 mt-2 form-control"
// 				name="userName"
// 				placeholder="User Name"
// 				onChange={handleChange}
// 				required
// 			/>
// 		</Form.Group>

// 		<Form.Group controlId="password">
// 			<Form.Control
// 				type="Password "
// 				className="hakimm py-2 mt-2 form-control"
// 				name="password"
// 				placeholder="Password"
// 				onChange={handleChange}
// 				required
// 			/>
// 		</Form.Group>
// 		<Button
// 			onSubmit={handleSubmit}
// 			variant="primary"
// 			type="submit"
// 			className="mt-2 agree_andjoin"
// 		>
// 			Agree and join
// 		</Button>

// 		<small className="px-4 d-flex justify-content-center text-center py-3">
// 			I agree to the
// 			<a href="" className="color_orange">
// 				{" "}
// 				privacy policy
// 			</a>{" "}
// 			and
// 			<a href="" className="color_orange">
// 				{" "}
// 				terms of service.
// 			</a>
// 		</small>
// 	</Form>
// 	<Link to="/login" className="color_orange">
// 		{" "}
// 		Already have an account?{" "}
// 	</Link>
// </div>;
