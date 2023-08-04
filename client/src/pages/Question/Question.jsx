import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "../../axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Question = () => {
	const [userData, setUserData] = useContext(UserContext);
	const questionInputRef = useRef(null);
	const descriptionInputRef = useRef(null);
	const [form, setForm] = useState({});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (!userData.user) navigate("/login");
	}, [userData.user, navigate]);

	const gettoken = localStorage.getItem("authtoken");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const ask = questionInputRef.current.value;
			const askDescription = descriptionInputRef.current.value;
			const response = await axios.post("/question", {
				question: ask,
				description: askDescription,
				userId: userData?.user?.id,
				token: gettoken,
			});

			navigate("/question");
			questionInputRef.current.value = "";
			descriptionInputRef.current.value = "";
			alert("Thank you for your question");
		} catch (error) {
			console.log("Error Message:", error.message);
			alert(error.response?.data?.msg || "Error asking the question");
		}
	};

	return (
		<div className="container my-5">
			<Header />
			<h3 className="text-center my-4">Steps to write a good Question</h3>
			<ul style={{ lineHeight: "30px", width: "50%", margin: "0px auto 60px" }}>
				<li>Summarize your problems in a one-line title.</li>
				<li>Describe your problem in more detail.</li>
				<li>Explain what you have tried and what you expected to happen.</li>
				<li>Review your question and post it to the site.</li>
			</ul>
			<h4 className="my-2 text-center">Ask a public question</h4>
			<div className="shadow-sm py-3 px-5 mb-2">
				<form onSubmit={handleSubmit}>
					<input
						className="my-3 form-control"
						ref={questionInputRef}
						type="text"
						name="question"
						placeholder="Title"
						onChange={handleChange}
					/>
					<textarea
						rows={4}
						className="form-control"
						ref={descriptionInputRef}
						type="text"
						name="description"
						placeholder="Question Description..."
						onChange={handleChange}
					/>
					<span>
						<Button className="mt-4" variant="primary" type="submit">
							Post Your Question
						</Button>
						<Link to="/">
							<Button
								style={{ backgroundColor: "rgb(231, 116, 22)", border: "none" }}
								className=" mt-4 ms-3"
							>
								Back to DashBord
							</Button>
						</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Question;
