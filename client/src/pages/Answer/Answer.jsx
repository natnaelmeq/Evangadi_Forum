import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Answer = () => {
	const [question, setQuestion] = useState({});
	// const [answer, setAnswer] = useState("");
	const [submittedAnswer, setSubmittedAnswer] = useState(null);
	const { id } = useParams();
	const answerInputRef = useRef(null);
	// console.log(answer);

	useEffect(() => {
		const fetchQuestion = async () => {
			try {
				const response = await axios.get(
					`http://localhost:4500/api/question/question/${id}`
				);
				const data = response.data;
				setQuestion(data);
			} catch (error) {
				console.log("Error:", error);
			}
		};
		fetchQuestion();
	}, [id]);

	

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const value = answerInputRef.current.value;

			if (value) {
				await axios.post("http://localhost:4500/api/answer", {
					name: value,
				});
				console.log(value);
				setSubmittedAnswer(value); 
			}
			answerInputRef.current.value = "";
		} catch (error) {
			console.log("Error:", error.msg);
			alert(error.msg);
		}
	};

	return (
		<div>
			{question && question.question ? (
				<div>
					<div>{question.question}</div>
					<div>{question.question_description}</div>
				</div>
			) : (
				<div>Loading...</div>
			)}

			<form onSubmit={handleSubmit}>
				<input
					ref={answerInputRef}
					type="text"
					name="ask"
					
					// value={answer}
					// onChange={(e) => setAnswer(e.target.value)}
				/>
				<button type="submit">Submit Answer</button>
			</form>

			{submittedAnswer && (
				<div>
					<h3>First Answer:</h3>
					<p>{submittedAnswer}</p>
				</div>
			)}

			<Link to={"/"}>
				<button>Back to DashBord</button>
			</Link>
		</div>
	);
};

export default Answer;
