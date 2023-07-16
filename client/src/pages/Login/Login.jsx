import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import { UserContext } from "../../context/UserContext";

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
				user: loginRes.data.user
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
		<div>
			<Header />
			<h1>Login</h1>
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
		</div>
	);
};

export default Login;
