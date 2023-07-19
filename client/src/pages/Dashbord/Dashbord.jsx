import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import "./Dashbord.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const Dashbord = () => {
	const [question, setQuestion] = useState([]);
	const [userData] = useContext(UserContext);
	const [search, setsearch] = useState("");
	console.log(question);

	useEffect(() => {
		fetchQuestions();
	}, []);

	async function fetchQuestions() {
		try {
			const { data } = await axios.get(
				"http://localhost:4500/api/question/dashbord"
			);
			setQuestion(data.data);
			console.log(data.data);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<>
			<div className="container">
				<Form.Control
					className="py-2 mt-2 form-control"
					type="search"
					placeholder="search"
					onChange={(e) => setsearch(e.target.value)}
				/>
				{question
					.filter((item) => {
						return search.toLowerCase() === ""
							? item
							: item.question.toLowerCase().includes(search);
					})
					.map((singleQ) => (
						<Link
							to={`/question/${singleQ.question_id}`}
							key={singleQ.question_id}
							className="d-flex  main-wrapper container"
						>
							<div className="inside">
								<div className="tieuser">
									<i className="fa-solid fa-user-tie  tie"></i>
									<p className="">{singleQ.user_name}</p>
								</div>
								<div>
									<h3 className="lead"> {singleQ.question}</h3>
									<p className="">{singleQ.question_id}</p>
								</div>
							</div>

							<div className="sign p-5">
								<i class="fa-solid fa-chevron-right fa-xl"></i>
							</div>
						</Link>
					))}
			</div>

			{/* <div style={{ backgroundColor: "#CCCCCC", margin: "10px" }}>
				{question.map((singleQ) => (
					<div key={singleQ.question_id}>
						<h3>{singleQ.question}</h3>
						<h5>{singleQ.question_description}</h5>
						<div>
							<FontAwesomeIcon icon={faUserTie} />

							<h3>{singleQ.user_name}</h3>
						</div>

						<hr />
					</div>
				))}
			</div> */}
		</>
	);
};

export default Dashbord;

//test

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
// 	const [question, setQuestion] = useState([]);
// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		fetchQuestions();
// 	}, []);

// 	async function fetchQuestions() {
// 		try {
// 			const { data } = await axios.get(
// 				"http://localhost:4500/api/question/dashbord"
// 			);
// 			setQuestion(data.data);
// 		} catch (error) {
// 			console.log(error.message);
// 		}
// 	}

// 	const handleQuestionClick = (questionId) => {
// 		navigate(`/answer/${questionId}`);
// 	};

// 	return (
// 		<>
// 			<div style={{ backgroundColor: "#CCCCCC", margin: "10px" }}>
// 				{question.map((singleQ) => (
// 					<div
// 						key={singleQ.question_id}
// 						onClick={() => handleQuestionClick(singleQ.question_id)}
// 					>
// 						<h3>{singleQ.question}</h3>
// 						<h5>{singleQ.question_description}</h5>
// 						<hr />
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	);
// };

// export default Dashboard;
