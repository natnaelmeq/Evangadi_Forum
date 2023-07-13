const pool = "../../config/database.jsx";
const { answerText, getallAnswers } = require("./answer.service.jsx");


module.exports = {
	createAnswer: (req, res) => {
		const { answer } = req.body;
		// const userId = req.user.id; 

		if (!answer) {
			return res.status(400).json({ msg: "please complete the answer" });
		}

		const data = {
			answer,
			// userId,
		};

		answerText(data, (err, result) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ msg: "Error", error: err });
			}

			return res.status(200).json({ msg: " successfully answered" });
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
