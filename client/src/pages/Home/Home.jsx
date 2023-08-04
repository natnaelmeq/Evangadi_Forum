import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Dashbord from "../Dashbord/Dashbord";
import Header from "../Header/Header";
import './Home.css'


const Home = ({ logout }) => {
	const [userData] = useContext(UserContext);
	const navigate = useNavigate();

	const isLoggedIn = !!userData.user;
	useEffect(() => {
		if (!isLoggedIn) navigate("/login");
	}, [isLoggedIn, navigate]);
	const authToken = localStorage.getItem("authtoken");

	

	return (
		<>
			<Header />
			<div>
				{userData.user ? (
					<>
						<div className="upper  container ">
							<Link to={"/question"} className="ask">
								<button className="bg-primary text-white border-none">
									Ask Question
								</button>{" "}
							</Link>
							<h3>Welcome :- {userData.user?.display_name}</h3>
						</div>
						<div className="pt-5 pb-5  container">
							<h3> Questions </h3>
						</div>
						
							<Dashbord />
						

					</>
				) : null}
			</div>
		</>
	);
};

export default Home;
