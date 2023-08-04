import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "../../axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { UserContext } from "../../context/UserContext";
import { Button } from "react-bootstrap";
import "./Answer.css"

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

	useEffect(() => {
		if (!userData.user) navigate("/login");
	}, [userData.user, navigate]);
	const gettoken = localStorage.getItem("authtoken");

	useEffect(() => {
		const fetchQuestion = async () => {
			try {
				const response = await axios.get(
					`/question/question/${id}`
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

			const response = await axios.post(`/answer`, {
				questionid: id,
				answer: yourAnswer,
				userId: userData?.user?.id,
				token: gettoken,
			});
			setSubmittedAnswer([
				...submittedAnswer,
				{ answer: yourAnswer, username: userData.user.display_name },
			]);
			
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
					`/answer/allAnswerForQ/${id}`
				);
				const data = response.data;
				setSubmittedAnswer(data);
				
			} catch (error) {
				console.log("Error:", error);
			}
		};
		fetchAnswers();
	}, [id]);

	return (
		<>
			<>
				<Header />
				<div
					className="container"
					style={{
						paddingTop: "85px",
						paddingBottom: "30px",
					}}
				>
					<div className="m-5 ">
						{question && question.question ? (
							<div>
								<h2>Question</h2>
								<h4 className="">{question.question}</h4>
								<h4 className="fw-light">{question.question_description}</h4>
								<h6>{question.question_id}</h6>
							</div>
						) : (
							<div>Loading...</div>
						)}
						<hr />
						<h2>Answers From The Community</h2>
						<hr />
						{submittedAnswer && submittedAnswer.length > 0 ? (
							<div>
							
								{submittedAnswer.map((answer, index) => (
									<div key={index}>
									

										<div className=" py-3 shadow mt-4 insider  ">
											<div className="tieuser col-md-2 col-sm-12 px-4">
												<i className="fa-solid fa-user-tie tie "></i>
												<p className="question_user_name mt-2  ">
													<h3 className="lead question_user_name ps-2 ">
														{answer.username}
													</h3>
												</p>
											</div>

											<div className="col-md-10 col-sm-1 px-4 ">
												<h6>{answer.answer}</h6>
											</div>
										</div>
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
							<textarea
								rows={4}
								className="form-control"
								ref={answerInputRef}
								type="text"
								name="ask"
								placeholder="Your Answer ..."
								onChange={handleChange}
							/>
							<span>
								<Button className="mt-4" variant="primary" type="submit">
									Post Your Question
								</Button>
								<Link to="/">
									<Button
										style={{
											backgroundColor: "rgb(231, 116, 22)",
											border: "none",
										}}
										className="mt-4 mx-4"
									>
										Back to DashBord
									</Button>
								</Link>
							</span>
						</form>
					</div>
				</div>
			</>
		</>
	);
};

export default Answer;
