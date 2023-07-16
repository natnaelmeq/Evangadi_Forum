import  {  useEffect } from "react";
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./context/UserContext.jsx";

import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Question from "./pages/Question/Question";
import SignUp from "./pages/SignUP/Signup.jsx";
import Answer from "./pages/Answer/Answer.jsx";
import Header from "./pages/Header/Header.jsx";

function App() {
	const [userData, setuserData ] = useContext(UserContext);
	const checkLoggedIN = async () => {
		let token = localStorage.getItem("auth-token");
		if (token === null) {
			localStorage.setItem("auth-token", "");
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
					{/* <Route path="/answer/:questionId" element={<Answer />} /> */}

					<Route path="/" element={<Home logout={logout} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
