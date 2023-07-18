import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Question = () => {
	const [userData, setUserData] = useContext(UserContext);
	console.log(userData);
	const questionInputRef = useRef(null);
	const descriptionInputRef = useRef(null);
	const [form, setForm] = useState({});
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const ask = questionInputRef.current.value;
			const askDescription = descriptionInputRef.current.value;
			const response = await axios.post("http://localhost:4500/api/question", {
				question: ask,
				description: askDescription,
				userId: userData?.user?.id,
			});

			console.log("Response Data:", response.data);
			questionInputRef.current.value = "";
			descriptionInputRef.current.value = "";
			alert("Thank you for your question");

			// ...
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

			<div className="shadow-sm py-3 px-5">
				<form onSubmit={handleSubmit} action="">
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
					<button>
						<Button className="mt-4" variant="primary">
							Post Your Question
						</Button>
					</button>
				</form>
				<Link to={"/"}>
					<Button variant="warning" href="/" className="mt-4 mx-4">
						Back to DashBord
					</Button>
				</Link>
			</div>
		</div>

		// <div>
		// 	<Header/>
		// 	<h2>Steps to write a good Question</h2>
		// 	<ul>
		// 		<li>Summarize your problems in a one-line title.</li>
		// 		<li>Describe your problem in more detail.</li>
		// 		<li>Explain what you have tried and what you expected to happen.</li>
		// 		<li>Review your question and post it to the site.</li>
		// 	</ul>
		// 	<h2>Ask a public question</h2>

		// 	<form onSubmit={handleSubmit} action="">
		// 		<input
		// 			ref={questionInputRef}
		// 			type="text"
		// 			name="question"
		// 			placeholder="Title"
		// 			onChange={handleChange}
		// 		/>{" "}
		// 		<br /> <br />
		// 		<input
		// 			ref={descriptionInputRef}
		// 			type="text"
		// 			name="description"
		// 			placeholder="Question Description ..."
		// 			onChange={handleChange}
		// 		/>{" "}
		// 		<br /> <br />
		// 		<button>Post Your Question</button>
		// 	</form>
		// 	<br />
		// 	<Link to={"/"}>
		// 		<button>Back to DashBord</button>
		// 	</Link>
		// </div>
	);
};

export default Question;
