// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Answer = () => {
// 	const [answer, setanswer] = useState([]);
// 	useEffect(() => {
// 		fetchquestions();
// 	}, []);
// 	async function fetchquestions() {
// 		const id = req.params.id;
// 		try {
// 			const { data } = await axios.get(
// 				`http://localhost:4500/api/question/${id}`
// 			);
// 			setanswer(data.data);
// 		} catch (error) {}
// 	}

//     return <div>{ answer}</div>;
// };

// export default Answer;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Answer = ({ questionId }) => {
	const [answer, setAnswer] = useState([]);

	useEffect(() => {
		fetchAnswer();
	}, [questionId]);

	async function fetchAnswer() {
		try {
			const response = await axios.get(
				`http://localhost:4500/api/question/${questionId}`
			);
			const data = response.data;
			setAnswer(data.data);
		} catch (error) {
			console.log("Error:", error);
		}
	}

	return (
		<div>
			{answer.map((singleAnswer) => (
				<div key={singleAnswer.answer_id}>
					<h3>{singleAnswer.answer}</h3>
					{/* Render other answer details */}
				</div>
			))}
		</div>
	);
};

export default Answer;



