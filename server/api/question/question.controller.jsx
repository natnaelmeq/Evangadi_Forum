const pool = require("../../config/database.jsx");
const { ask, getallQuestions } = require("./question.service.jsx");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
	createQuestion: (req, res) => {
		const { question, description, userId } = req.body;
		

		if (!question || !description) {
			return res
				.status(400)
				.json({ msg: "Please provide both question and description" });
		}

		const data = {
			question,
			description,
			userId,
		};

		ask(data, (err, result) => {
			if (err) {
				console.error(err);
				return res
					.status(500)
					.json({ msg: "Error asking the question", error: err });
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
	questions: (req, res) => {
		getallQuestions((err, result) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			return res.status(200).json({ data: result });
		});
	},

	questionById: (req, res) => {
		const id = req.params.id;
		const SingleQuestion =
			"SELECT question, question_description FROM question WHERE question_id = ?";

		pool.query(SingleQuestion, [id], (error, results) => {
			if (error) {
				return res.status(500).json({ msg: error });
			}

			if (results.length < 1) {
				return res.status(404).send(`No question with id: ${id}`);
			} else {
				res.status(200).json(results[0]);
			}
		});
	},
};
