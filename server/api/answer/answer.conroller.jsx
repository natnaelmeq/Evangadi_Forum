const pool = "../../config/database.jsx";
const { answerText, getallAnswers } = require("./answer.service.jsx");

module.exports = {
	createAnswer: (req, res) => {
		const { answer, questionid,userid } = req.body;
		// const userId = req.user.id;

		if ((!answer, !questionid)) {
			return res.status(400).json({ msg: "please complete the answer" });
		}

		const data = {
			answer,questionid
			
		};

		answerText(data, (err, result) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ msg: "Error", error: err });
			}

			return res.status(200).json({ msg: " successfully answered" });
		});
	},

	getAnswers: (req, res) => {
		const questionid = req.params.id;
		const answersForQuestion =
			"SELECT user_name, answer FROM answer JOIN registration ON answer.user_id = registration.user_id WHERE answer.question_id = ?";

		pool.query(answersForQuestion, [questionid], (error, results) => {
			if (error) {
				return res.status(500).json({ msg: error });
			}

			if (results.length < 1) {
				return res.status(404).send(`No answer with id: ${questionid}`);
			} else {
				const answers = results.map((row) => ({
					username: row.user_name,
					answer: row.answer,
				}));
				res.status(200).json(answers);
			}
		});
	},
	// allAnswers: (req, res) => {
	// 	getallAnswers((err, result) => {
	// 		if (err) {
	// 			console.log(err);
	// 			return res.status(500).json({ msg: "database connection err" });
	// 		}
	// 		return res.status(200).json({ data: result });
	// 	});
	// },
};
