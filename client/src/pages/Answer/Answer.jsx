import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { UserContext } from "../../context/UserContext";
import { Button } from "react-bootstrap";

const Answer = () => {
	const [userData, setUserData] = useContext(UserContext);
	const [question, setQuestion] = useState({});
	const [form, setForm] = useState({});
	const [submittedAnswer, setSubmittedAnswer] = useState(null);
	const { id } = useParams();
	const answerInputRef = useRef(null);
	const navigate = useNavigate();
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	console.log(submittedAnswer);
	console.log(userData);
	useEffect(() => {
		if (!userData.user) navigate("/login");
	}, [userData.user, navigate]);

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
			const yourAnswer = answerInputRef.current.value;

			const response = await axios.post(`http://localhost:4500/api/answer`, {
				questionid: id,
				answer: yourAnswer,
				userId: userData?.user?.id,
			});
			setSubmittedAnswer([
				...submittedAnswer,
				{ answer: yourAnswer, username: userData.user.display_name },
			]);
			setUserData({
				...userData,
				token: response.data.token,
			});
			localStorage.setItem("auth-token", response.data.token);
			navigate(`/question/${id}`);
			console.log("Response Data:", response.data);
			answerInputRef.current.value = "";
			alert("Thank you for your answer");
		} catch (error) {
			console.log("Error:", error.msg);
			alert(error.msg);
		}
	};
	useEffect(() => {
		const fetchAnswers = async () => {
			try {
				const response = await axios.get(
					`http://localhost:4500/api/answer/allAnswerForQ/${id}`
				);
				const data = response.data;
				setSubmittedAnswer(data);
				console.log(data);
			} catch (error) {
				console.log("Error:", error);
			}
		};
		fetchAnswers();
	}, [id]);

	return (
		<>
			<Header />
			<div className="container">
				<div className="m-5">
					{question && question.question ? (
						<div>
							<h2 className="my-5">{question.question}</h2>
							<h4>{question.question_description}</h4>
							<h6>{question.question_id}</h6>
						</div>
					) : (
						<div>Loading...</div>
					)}
					<h1>Answers From The Community</h1>

					{submittedAnswer && submittedAnswer.length > 0 ? (
						<div>
							<h3>Answers:</h3>
							{submittedAnswer.map((answer, index) => (
								<div key={index}>
									<div className="col-md-10 col-sm-12">
										<h6>{answer.answer}</h6>
									</div>

									{/* <p>Answer: {answer.answer}</p> */}
									<div className="my-5 row shadow">
										<div className={`order-1 col-md-2 col-sm-12`}>
											<div className="row">
												<div className="col-sm-12">image</div>
												<div className="col-sm-12">
													<h6 className="my-3 text-secondary text-capitalize">
														{answer.username}
													</h6>
												</div>
											</div>
										</div>
									</div>
									{/* <p>by: {answer.username}</p> */}
								</div>
							))}
						</div>
					) : (
						<div>No answers submitted yet.</div>
					)}
					<div className="my-5 text-center">
						<h2>Answer The Above Question</h2>
					</div>
					<form onSubmit={handleSubmit}>
						{/* <input
							ref={answerInputRef}
							type="text"
							name="ask"
							placeholder="Please write your answer here "
							// onChange={handleChange}
						/> */}
						<textarea
							rows={4}
							className="form-control"
							ref={answerInputRef}
							type="text"
							name="ask"
							placeholder="Your Answer ..."
							onChange={handleChange}
						/>

						<Button type="submit" className="my-4" variant="primary">
							Post Your Answer
						</Button>
					</form>
					<Link to={"/"}>
						<span>
							<Button variant="warning" className="mx-4">
								Back to DashBord
							</Button>
						</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Answer;
