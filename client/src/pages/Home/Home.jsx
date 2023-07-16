import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Dashbord from "../Dashbord/Dashbord";
import Header from "../Header/Header";

const Home = ({ logout }) => {
	const [userData] = useContext(UserContext);
	const navigate = useNavigate();
	console.log(userData);

	useEffect(() => {
		if (!userData.user) navigate("/login");
	}, [userData.user, navigate]);

	console.log("userData:", userData);
	console.log("userData.user:", userData.user);

	return (
		<>
			<Header />
			<div>
				{userData.user ? (
					<>
						<h1>Welcome {userData.user?.display_name}</h1>
						<button onClick={logout}>Log Out</button> <br />
						<br />
						<Link to="/question">
							<button>Ask Question</button>
						</Link>
						<hr />
						<h1>Questions</h1>
						<Link to={"/answer"}>
							<Dashbord />
						</Link>
					</>
				) : null}
			</div>
		</>
	);
};

export default Home;
