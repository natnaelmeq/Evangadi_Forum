import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import axios from "axios";
import Header from "../Header/Header";

const SignUp = () => {
	const [userData, setuserData ]  = useContext(UserContext);
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
		<div>
			<Header />
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
		</div>
	);
};

export default SignUp;
