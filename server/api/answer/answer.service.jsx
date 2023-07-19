const pool = require("../../config/database.jsx");

module.exports = {
	answerText: (data, callback) => {
		pool.query(
			"INSERT INTO answer(answer_id,question_id, answer,user_id) VALUES (?, ?,?,?)",
			[data.answerid, data.questionid, data.answer, userId],
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
