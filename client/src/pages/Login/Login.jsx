import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import { UserContext } from "../../context/UserContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import SignUp from "../SignUP/SignUP";
import bg from "../../assets/Image/bg-svg-f.svg";
import "./Login.css";

const Login = () => {
	const [userData, setUserData] = useContext(UserContext);
	const navigate = useNavigate();
	const [form, setForm] = useState({});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const loginRes = await axios.post(
				"http://localhost:4500/api/users/login",
				{
					email: form.email,
					password: form.password,
				}
			);

			setUserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
			});
			


			localStorage.setItem("auth-token", loginRes.data.token);
			navigate("/");
		} catch (error) {
			console.log("Error:", error.response.data.msg);
			alert(error.response.data.msg);
		}
	};

	useEffect(() => {
		if (userData.user) navigate("/");
	}, [userData.user, navigate]);

	return (
		<>
			<Header />

			<section
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					paddingTop: "130px",
					paddingBottom: "170px",
				}}
			>
				<Container>
					<Row>
						<Col>
							<div className="login_container  pt-4">
								{/* <h1>Login</h1> */}
								<div className="py-1 text-center px-md-1 px-sm-3 mx-md-3">
									<h5>Login to your account</h5>
									<p>
										Don’t have an account?{" "}
										<span
											onClick={() => {
												// toggle();
											}}
											style={{
												color: "orange",
												cursor: "pointer",
											}}
										>
											{" "}
											<div>
												<Link to="/signup">Create a new Account</Link>
											</div>
										</span>
									</p>
								</div>
								{/* <div className="px-xl-4 "></div> */}
								<form onSubmit={handleSubmit}>
									{/* <label>Email:</label>
                <input type="text" name="email" onChange={handleChange} /> */}
									<input
										type="email"
										className="email form-control"
										name="email"
										placeholder="Email "
										onChange={handleChange}
									/>
									{/* <label>Password:</label>
                <input type="password" name="password" onChange={handleChange} /> */}
									<input
										type="text "
										className="hakimm py-2 mt-3 form-control"
										name="password"
										placeholder="Password"
										onChange={handleChange}
									/>
									<button type="submit" className="mt-5c signIn">
										Log In
									</button>
								</form>
								<div className="link mt-4">
									<Link to="/signup">Create a new account</Link>
								</div>
							</div>

							{/* <div>
								<form onSubmit={handleSubmit}>
									<label htmlFor="email">Email:</label>
									<input
										type="text"
										id="email"
										name="email"
										onChange={handleChange}
										placeholder="Email"
									/>{" "}
									<br />
									<label htmlFor="password">Password:</label>
									<input
										type="password"
										id="password"
										name="password"
										placeholder="Password"
										onChange={handleChange}
									/>{" "}
									<br />
									<button type="submit">Submit</button>
								</form>
								<Link to="/signup">Create a new Account</Link>
							</div> */}
							{/* <div className="rounded  shadow ">{<SignUp />}</div> */}
						</Col>

						<Col sm={12} md={6}>
							<div className="pt-5 px-4">
								<small style={{ color: "#f6912b" }}>About</small>
								<h1 className="mb-4">Evangadi Networks</h1>
								<p style={{ lineHeight: "30px", width: "75%" }}>
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

		//------------------------------------
	);
};

export default Login;
