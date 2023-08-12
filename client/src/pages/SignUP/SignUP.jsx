// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";

// import axios from "../../axios";
// import Header from "../Header/Header";
// import "./SignUP.css";
// import Container from "react-bootstrap/Container";
// import bg from "../../assets/Image/bg-svg-f.svg";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// import { Form, Button, Col, Row } from "react-bootstrap";

// const SignUp = () => {
// 	const [userData, setuserData] = useContext(UserContext);
// 	const [form, setform] = useState({});
// 	const navigate = useNavigate();
// 	const [passwordVisible, setPasswordVisible] = useState(false);
// 	const handleChange = (e) => {
// 		setform({ ...form, [e.target.name]: e.target.value });
// 	};

// 	const passwordchange = () => {
// 		setPasswordVisible(!passwordVisible);
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			await axios.post("/users", form);
// 			alert("Successfully signed up! Please log in with your new account.");
// 			navigate("/login");
// 		} catch (error) {
// 			console.log("problem", error.response.data.msg);
// 			alert(error.response.data.msg);
// 		}
// 	};

// 	return (
// 		<>
// 			<Header />

// 			<div
// 				style={{
// 					backgroundImage: `url(${bg})`,
// 					backgroundSize: "cover",
// 					backgroundRepeat: "no-repeat",
// 					paddingTop: "180px",
// 					paddingBottom: "100px",
// 				}}
// 			>
// 				<Container>
// 					<Row>
// 						<div className="login_container_signUp col-sm-12 col-md shadow">
// 							<div className=" text-center mb-4">
// 								<h5>Join the network</h5>
// 								<p>
// 									Already have an account?
// 									<Link to="/login" className="create_new_acc">
// 										{" "}
// 										Sign in
// 									</Link>
// 								</p>
// 							</div>
// 							<Form onSubmit={handleSubmit}>
// 								<Form.Group controlId="email">
// 									<Form.Control
// 										type="Email "
// 										className="p-3 mt-2 form-control"
// 										name="email"
// 										placeholder="Email address"
// 										onChange={handleChange}
// 										required
// 									/>
// 								</Form.Group>
// 								<div className="row">
// 									<Form.Group controlId="firstName " className="col-md">
// 										<Form.Control
// 											type="text"
// 											className="p-3 mt-3 "
// 											name="firstName"
// 											placeholder="First name"
// 											onChange={handleChange}
// 											required
// 										/>
// 									</Form.Group>
// 									<Form.Group controlId="lastName" className="col-sm-12 col-md">
// 										<Form.Control
// 											type="text "
// 											className="p-3 mt-3"
// 											name="lastName"
// 											placeholder="Last name"
// 											onChange={handleChange}
// 											required
// 										/>
// 									</Form.Group>
// 								</div>
// 								<Form.Group controlId="userName">
// 									<Form.Control
// 										type="text "
// 										className="p-3 mt-3"
// 										name="userName"
// 										placeholder="User name"
// 										onChange={handleChange}
// 										required
// 									/>
// 								</Form.Group>

// 								<Form.Group controlId="password">
// 									<span onClick={passwordchange}>
// 										{" "}
// 										<input
// 											type={passwordVisible ? "text" : "password"}
// 											className="p-3 mt-3 form-control"
// 											name="password"
// 											placeholder="Password"
// 											onChange={handleChange}
// 										/>{" "}
// 										<i
// 											style={{
// 												position: "relative",
// 												top: "-40px",
// 												left: "85%",
// 												cursor: "pointer",
// 											}}
// 										>
// 											{passwordVisible ? (
// 												<VisibilityOffIcon />
// 											) : (
// 												<VisibilityIcon />
// 											)}
// 										</i>
// 									</span>
// 								</Form.Group>

// 								<small className="px-4  text-center py-3">
// 									I agree to the
// 									<Link to="" className="orange">
// 										{" "}
// 										privacy policy
// 									</Link>{" "}
// 									and
// 									<Link to="" className="orange">
// 										{" "}
// 										terms of service.
// 									</Link>
// 								</small>

// 								<Button
// 									variant="primary"
// 									type="submit"
// 									className="signUp_Btn"
// 									style={{
// 										border: "none",
// 									}}
// 								>
// 									Agree and join
// 								</Button>

// 								<Link to="/login" className="text-center create_new_acc mt-2">
// 									Already have an account?
// 								</Link>
// 							</Form>
// 						</div>

// 						<Col sm={12} md={6}>
// 							<div className="pt-5 px-4">
// 								<small style={{ color: "#f6912b" }}>About</small>
// 								<h1 className="mb-4">Evangadi Networks</h1>
// 								<p style={{ lineHeight: "30px" }}>
// 									No matter what stage of life you are in, whether you’re just
// 									starting elementary school or being promoted to CEO of a
// 									Fortune 500 company, you have much to offer to those who are
// 									trying to follow in your footsteps.
// 									<br />
// 									<br />
// 									Whether you are willing to share your knowledge or you are
// 									just looking to meet mentors of your own, please start by
// 									joining the network here.
// 								</p>
// 								<Button
// 									style={{
// 										backgroundColor: "#f6912b",
// 										border: "none",
// 									}}
// 								>
// 									HOW IT WORKS
// 								</Button>
// 							</div>
// 						</Col>
// 					</Row>
// 				</Container>
// 			</div>
// 		</>
// 	);
// };

// export default SignUp;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import "./SignUP.css";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import bg from "../../assets/Image/bg-svg-f.svg";
// import "./SignUp.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { Form, Button, Col } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
// import Header from "./Header";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";

import axios from "../../axios";
import Header from "../Header/Header";
import "./SignUP.css";
// import Container from "react-bootstrap/Container";
// import bg from "../../assets/Image/bg-svg-f.svg";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { Form, Button, Col, Row } from "react-bootstrap";

const SignUp = () => {
	const [userData, setuserData] = useContext(UserContext);
	const [form, setform] = useState({});
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();
	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
	};
	// const [error,setError] =useState(false)
	const [isEmailFocused, setEmailFocused] = useState(false);
	const [isFirstnameFocused, setFirstnameFocused] = useState(false);
	const [isLastnameFocused, setLastnameFocused] = useState(false);
	const [isUsernameFocused, setUsernameFocused] = useState(false);
	const [isPasswordFocused, setPasswordFocused] = useState(false);
	const getInputStyle = (isFocused, value) => ({
		borderBottomColor: isFocused ? "orange" : "#ced4da",
		borderBottomWidth: isFocused ? "3px" : "1px",
		boxShadow: "none",
		backgroundColor: !isFocused && value === "" ? "#fcb6b6" : "white",
	});
	//   const getErrorStyle = (isError) => ({
	//     backgroundColor:isError?"red":"white",
	//   });
	const handleFocus = (setstate) => {
		setstate(true);
	};
	const handleBlur = (setstate) => {
		setstate(false);
	};
	//   const handleEmailFocus = () => {
	//     setEmailFocused(true);
	//   };

	//   const handleEmailBlur = () => {
	//     setEmailFocused(false);
	//   };

	//   const handleFirstnameFocus = () => {
	//     setFirstnameFocused(true);
	//   };

	//   const handleFirstnameBlur = () => {
	//     setFirstnameFocused(false);
	//   };

	//   const handleLastnameFocus = () => {
	//     setLastnameFocused(true);
	//   };

	//   const handleLastnameBlur = () => {
	//     setLastnameFocused(false);
	//   };

	//   const handleUsernameFocus = () => {
	//     setUsernameFocused(true);
	//   };

	//   const handleUsernameBlur = () => {
	//     setUsernameFocused(false);
	//   };

	//   const handlePasswordFocus = () => {
	//     setPasswordFocused(true);
	//   };

	//   const handlePasswordBlur = () => {
	//     setPasswordFocused(false);
	//   };
	console.log(userData);
	console.log(form);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const requiredFields = [
			"email",
			"firstName",
			"lastName",
			"userName",
			"password",
		];
		let hasEmptyField = false;
		for (const field of requiredFields) {
			if (!form[field]) {
				hasEmptyField = true;
				setform((prevForm) => ({
					...prevForm,
					[field]: "",
				}));
			}
		}

		if (hasEmptyField) {
			return;
		}
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
					paddingTop: "130px",
					paddingBottom: "170px",
				}}
			>
				<Row>
					<div className="sign-up-container  col-md  shadow ">
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
								{" "}
								{""}
								Sign in
							</span>
						</p>

						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="email">
								<Form.Control
									type="Email"
									className="hakimm py-2 mt-2 form-control"
									name="email"
									placeholder="Email"
									onChange={handleChange}
									onFocus={() => handleFocus(setEmailFocused)}
									onBlur={() => handleBlur(setEmailFocused)}
									style={getInputStyle(isEmailFocused, form.email)}
									// required
								/>
							</Form.Group>
							<div className="row">
								<Form.Group controlId="firstName" className="col-md">
									<Form.Control
										type="text "
										className="hakimm py-2 mt-2 form-control"
										name="firstName"
										placeholder="First Name"
										errormessage="firstname required"
										onChange={handleChange}
										onFocus={() => handleFocus(setFirstnameFocused)}
										onBlur={() => handleBlur(setFirstnameFocused)}
										style={getInputStyle(isFirstnameFocused, form.firstName)}
										// required
									/>
								</Form.Group>
								<Form.Group controlId="lastName" className="col-md">
									<Form.Control
										type="text "
										className="hakimm py-2 mt-2 form-control"
										name="lastName"
										placeholder="Last Name"
										errormessage="lastname required"
										onChange={handleChange}
										onFocus={() => handleFocus(setLastnameFocused)}
										onBlur={() => handleBlur(setLastnameFocused)}
										style={getInputStyle(isLastnameFocused, form.lastName)}
										// required
									/>
								</Form.Group>
							</div>
							<Form.Group controlId="userName">
								<Form.Control
									type="text "
									className="hakimm py-2 mt-2 form-control"
									name="userName"
									placeholder="User Name"
									errormessage="username required"
									onChange={handleChange}
									onFocus={() => handleFocus(setUsernameFocused)}
									onBlur={() => handleBlur(setUsernameFocused)}
									style={getInputStyle(isUsernameFocused, form.userName)}
									// required
								/>
							</Form.Group>
							<div className="visibility">
								<Form.Group controlId="password">
									<Form.Control
										type={visible ? "text" : "password"}
										className="hakimm py-2 mt-2 form-controlp"
										name="password"
										placeholder="Password"
										errormessage="password required"
										onChange={handleChange}
										onFocus={() => handleFocus(setPasswordFocused)}
										onBlur={() => handleBlur(setPasswordFocused)}
										style={getInputStyle(isPasswordFocused, form.password)}
										// required
									/>
								</Form.Group>
								<div className="eye" onClick={() => setVisible(!visible)}>
									{visible ? (
										<AiFillEye />
									) : (
										<AiFillEyeInvisible></AiFillEyeInvisible>
									)}{" "}
								</div>
							</div>

							<Button
								onSubmit={handleSubmit}
								variant="primary"
								type="submit"
								className="mt-3 agree_and_join"
							>
								Agree and join
							</Button>

							<small className="px-4  text-center py-3">
								I agree to the {" "}
								<Link to="" className="orange">
									privacy policy {" "}
								</Link>{" "}
								and {" "}
								<Link to="" className="orange">
									terms of service. {" "}
								</Link>
								{" "}
							</small>
						</Form>
						{/* <Link to="/login" className="color_orange">
						{" "}
						Already have an account?{" "}
					</Link> */}
					</div>
					<Col sm={12} md={6}>
						<div className="pt-5 px-4 ">
							<small style={{ color: "#f6912b" }}>About</small>
							<h1 className="mb-4">Evangadi Networks</h1>
							<div style={{ lineHeight: "30px", width: "75%" }}>
								No matter what stage of life you are in, whether you’re just
								starting elementary school or being promoted to CEO of a Fortune
								500 company, you have much to offer to those who are trying to
								follow in your footsteps.
								<br />
								<br />
								Whether you are willing to share your knowledge or you are just
								looking to meet mentors of your own, please start by joining the
								network here.
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
			</div>
		</>
	);
};

export default SignUp;
