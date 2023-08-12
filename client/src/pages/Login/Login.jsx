import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import Header from "../Header/Header";
import { UserContext } from "../../context/UserContext";

import { Container, Row, Col, Button } from "react-bootstrap";
import bg from "../../assets/Image/bg-svg-f.svg";
import "./Login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
	const [userData, setUserData] = useContext(UserContext);
	const navigate = useNavigate();
	const [form, setForm] = useState({});
	const [passwordVisible, setPasswordVisible] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const passwordchange = () => {
		setPasswordVisible(!passwordVisible);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const loginRes = await axios.post("/users/login", {
				email: form.email,
				password: form.password,
			});

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
				<Container interval={null}>
					<Row>
						<Col sm={12} md={5}>
							<div className="login_container shadow px-5">
								<div className=" text-center px-md- px-sm-3 mx-md-3 mb-4">
									<h5>Login to your account</h5>
									<p>
										Don't have an account?
										<Link
											className="create_new_acc"
											to="/signup"
											onClick={() => {}}
										>
											{" "}
											Create a new account
										</Link>
									</p>
								</div>

								<form onSubmit={handleSubmit}>
									<input
										type="text"
										className="form-control"
										name="email"
										placeholder="email "
										onChange={handleChange}
									/>{" "}
									<br />
									<span>
										{" "}
										<input
											type={passwordVisible ? "text" : "password"}
											className="p-2 mt-1 form-control"
											name="password"
											placeholder="Password"
											onChange={handleChange}
										/>{" "}
										<i
											onClick={passwordchange}
											style={{
												position: "relative",
												top: "-35px",
												left: "85%",
												cursor: "pointer",
											}}
										>
											{passwordVisible ? (
												<VisibilityIcon />
											) : (
												<VisibilityOffIcon />
											)}
										</i>
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
								<div style={{ lineHeight: "30px" }}>
									No matter what stage of life you are in, whether you’re just
									starting elementary school or being promoted to CEO of a
									Fortune 500 company, you have much to offer to those who are
									trying to follow in your footsteps.
									<br />
									<br />
									Whether you are willing to share your knowledge or you are
									just looking to meet mentors of your own, please start by
									joining the network here.
								</div>
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
