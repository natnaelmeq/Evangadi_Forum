import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import Header from "../Header/Header";
import { UserContext } from "../../context/UserContext";

import { Container, Row, Col, Button } from "react-bootstrap";
import bg from "../../assets/Image/bg-svg-f.svg";
import "./Login.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faEye, faEyeSlash);

// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import fontawesome from "@fortawesome/fontawesome";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
const Login = () => {
	const [userData, setUserData] = useContext(UserContext);
	const navigate = useNavigate();
	const [form, setForm] = useState({});
	const [visible, setVisiblity] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

 const handleToggle = () => {
		setVisible((prevState) => !prevState);
 };
	// const Icon = (

	// 	<FontAwesomeIcon icon={visible? "eye-slash" : "eye"} />
	// )

	const InputType = visible ? "text" : "password";

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const loginRes = await axios.post(
				"/users/login",
				{
					email: form.email,
					password: form.password,
				}
			);

			setUserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
			});

			console.log(loginRes.data.token);

			localStorage.setItem("authtoken", loginRes.data.token);
			navigate("/");
		} catch (error) {
			console.log("Error:", error.response.data.msg);
			alert(error.response.data.msg);
		}
	};

	useEffect(() => {
		if (userData.user) navigate("/");
	}, []);

	return (
		<>
			<Header />
			<section
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					paddingTop: "180px",
					paddingBottom: "100px",
				}}
			>
				<Container className="x-5">
					<Row>
						<Col sm={12} md={6}>
							<div className="login_container shadow px-5">
								{/* <h1>Login</h1> */}
								<div className=" text-center px-md- px-sm-3 mx-md-3 mb-4">
									<h5>Login to your account</h5>
									<p>
										Don’t have an account?
										<Link
											className="create_new_acc"
											to="/signup"
											onClick={() => {
												// toggle();
											}}
										>
											{" "}
											Create a new account
										</Link>
									</p>
								</div>
								{/* <div className="px-xl-4 "></div> */}
								<form onSubmit={handleSubmit}>
									{/* <label>Email:</label>
                <input type="text" name="email" onChange={handleChange} /> */}
									<input
										type="email"
										className="p-3 email form-control"
										name="email"
										placeholder="Email address"
										onChange={handleChange}
									/>
									{/* <label>Password:</label>
                <input type="password" name="password" onChange={handleChange} /> */}
									<input
										type={InputType}
										className="p-3 mt-3 form-control"
										name="password"
										placeholder="Password"
										onChange={handleChange}
									/>

									<span>
										<FontAwesomeIcon
											icon={visible ? "faEyeSlash" : "faEye"}
											onClick={handleToggle}
											className="eye_icon"
										/>
									</span>

									<Link className="create_new_acc text-end pt-3">
										Forgot password?
									</Link>
									<Button type="submit" className=" mt-4 signIn">
										Login
									</Button>
								</form>
							</div>
						</Col>

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
			</section>
		</>
	);
};

export default Login;
