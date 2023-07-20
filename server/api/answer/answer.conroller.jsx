const pool = require("../../config/database.jsx");
const { answerText, getallAnswers } = require("./answer.service.jsx");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
	createAnswer: (req, res) => {
		const { questionid, answer, userId } = req.body;
		// const usequestionidrId = req.user.id;

		if (!answer || !questionid) {
			return res.status(400).json({ msg: "please complete the answer" });
		}

		const data = {
			answer,
			questionid,
			userId,
		};

		answerText(data, (err, result) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ msg: "Error", error: err });
			}

			const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
				expiresIn: "3h",
			});
			return res.json({
				token,
				user: { id: result.userId, display_name: result.user_name },
			});
		});
	},
	getAnswers: (req, res) => {
		const questionId = req.params.id;
		const answersForQuestionQuery = `
    SELECT user_name, answer FROM answer 
    JOIN registration ON answer.user_id = registration.user_id 
    WHERE answer.question_id = ?`;

		pool.query(answersForQuestionQuery, [questionId], (error, results) => {
			if (error) {
				return res.status(500).json({ msg: error });
			}

			if (results.length < 1) {
				return res
					.status(404)
					.send(`No answers for question with id: ${questionId}`);
			} else {
				const answers = results.map((row) => ({
					username: row.user_name,
					answer: row.answer,
				}));
				res.status(200).json(answers);
			}
		});
	},

	allAnswers: (req, res) => {
		getallAnswers((err, result) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			return res.status(200).json({ data: result });
		});
	},
};
