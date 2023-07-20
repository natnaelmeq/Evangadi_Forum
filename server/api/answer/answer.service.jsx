const pool = require("../../config/database.jsx");

module.exports = {
	answerText: (data, callback) => {
		pool.query(
			"INSERT INTO answer(question_id, answer, user_id) VALUES (?, ?, ?)",
			[data.questionid, data.answer, data.userId],
			(err, result) => {
				if (err) {
					return callback(err);
				}
				return callback(null, result);
			}
		);
	},

	answerById: (id, callback) => {
		pool.query(
			"SELECT *  FROM answer WHERE answer.answer_id = ?",
			[id],
			(err, result) => {
				if (err) {
					return callback(err);
				}
				return callback(null, result[0]);
			}
		);
	},


	

	getallAnswers: (callback) => {
		pool.query("SELECT * FROM answer", [], (err, result) => {
			if (err) {
				return callback(err);
			}
			return callback(null, result);
		});
	},
};
