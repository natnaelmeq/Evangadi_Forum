import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

import "./Dashbord.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const Dashbord = () => {
	const [question, setQuestion] = useState([]);
	const [userData] = useContext(UserContext);
	const [search, setsearch] = useState("");
	// console.log(question);

	useEffect(() => {
		fetchQuestions();
	}, []);

	async function fetchQuestions() {
		try {
			const { data } = await axios.get(
				"http://localhost:4500/api/question/dashbord"
			);
			setQuestion(data.data);
			// console.log(data.data);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<>
			<div className="container">
				<form className="d-flex">
					<input
						style={{
							border: "3px solid black",
							width: "40%",
							margin: "0px auto 55px",
							textAlign: "center",
						}}
						className="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
						onChange={(e) => setsearch(e.target.value)}
					/>
					{/* <button style={{border:'3px solid black', width:'40%', margin:'0px auto 55px',textAlign: 'center'}} className="btn btn-outline-success" type="submit">
						Search
					</button> */}
				</form>
				{/* <Form.Control
					style={{border:'3px solid black', width:'40%', margin:'0px auto 55px',textAlign: 'center'}}
					className="py-2 mt-2 form-control"
					type="search"
					placeholder="search"
					onChange={(e) => setsearch(e.target.value)}
				/> */}
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
									{/* <p className="">{singleQ.question_id}</p> */}
								</div>
							</div>

							<div className="sign p-5">
								<i class="fa-solid fa-chevron-right fa-xl"></i>
							</div>
						</Link>
					))}
			</div>
		</>
	);
};

export default Dashbord;
