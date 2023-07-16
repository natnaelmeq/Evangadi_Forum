import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const Dashbord = () => {
	const [question, setQuestion] = useState([]);
	const [userData] = useContext(UserContext);

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
			
			<div style={{ backgroundColor: "#CCCCCC",margin:'10px' }}>
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
			</div>
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
