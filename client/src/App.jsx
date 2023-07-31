import { useEffect } from "react";
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Question from "./pages/Question/Question";
import SignUp from "./pages/SignUP/SignUP";
import Answer from "./pages/Answer/Answer.jsx";
import Header from "./pages/Header/Header.jsx";
import Footer from "./pages/Footer/Footer.jsx";

function App() {
	const [userData, setuserData] = useContext(UserContext);
	const checkLoggedIN = async () => {
		let token = localStorage.getItem("auth-token");
		console.log("Token from localStorage:", token);
		if (token === null) {
			// localStorage.setItem("auth-token", "");
			token = "";
		} else {
			const userRes = await axios.get("http://localhost:4500/api/users", {
				headers: { "x-auth-token": token },
			});
			setuserData({
				token,
				user: {
					id: userRes.data.data.user_id,
					display_name: userRes.data.data.user_name,
				},
			});
		}
	};
	const logout = () => {
		setuserData({
			token: undefined,
			user: undefined,
		});
	};

	localStorage.setItem("auth-token", "");

	useEffect(() => {
		checkLoggedIN();
	}, []);

	return (
		<Router>
			<div>
				<Routes>
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route path="/question" element={<Question />} />
					<Route path="/question/:id" element={<Answer />} />

					<Route path="/" element={<Home logout={logout} />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
