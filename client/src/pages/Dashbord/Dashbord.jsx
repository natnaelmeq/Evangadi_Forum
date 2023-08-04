import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

import "./Dashbord.css";
import { Link } from "react-router-dom";
import { Container, Form, Row } from "react-bootstrap";

const Dashboard = () => {
	const [question, setQuestion] = useState([]);
	const [userData] = useContext(UserContext);
	const [search, setsearch] = useState("");

	useEffect(() => {
		fetchQuestions();
	}, []);

	async function fetchQuestions() {
		try {
			const { data } = await axios.get("/question/dashbord");
			setQuestion(data.data);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<Container>
			<div className="container">
				<Form className="mt-3">
					<Form.Control
						className="me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
						onChange={(e) => setsearch(e.target.value)}
					/>
				</Form>

				<Row>
					{question
						.filter((item) =>
							search.toLowerCase() === ""
								? item
								: item.question.toLowerCase().includes(search)
						)
						.map((singleQ) => (
							<Link
								to={`/question/${singleQ.question_id}`}
								key={singleQ.question_id}
								className="main-wrapper mt-4"
							>
								<div className="py-4 inside">
									<div className="tieuser">
										<i className="fa-solid fa-user-tie tie"></i>
										<p className="question_user_name mt-2 ps-2">
											{singleQ.user_name}
										</p>
									</div>
									<div className="pt-md-4">
										<h3 className="lead question_user_name">
											{singleQ.question}
										</h3>
									</div>
								</div>

								<div className="sign p-5 mt-3 text-secondary">
									<i className="fa-solid fa-chevron-right fa-xl"></i>
								</div>
							</Link>
						))}
				</Row>
			</div>
		</Container>
	);
};

export default Dashboard;
