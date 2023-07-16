const pool = require("../../config/database.jsx");

module.exports = {
	ask: (data, callback) => {
		pool.query(
			"INSERT INTO question(question, question_description,user_id) VALUES (?, ?,?)",
			[data.question, data.description, data.userId],
			(err, result) => {
				if (err) {
					return callback(err);
				}
				return callback(null, result);
			}
		);
	},

	getallQuestions: (callback) => {
		pool.query("SELECT * FROM question", [], (err, result) => {
			if (err) {
				return callback(err);
			}
			return callback(null, result);
		});
	},

	dashbord: (callback) => {
		pool.query("SELECT question, user_id FROM question", [], (err, result) => {
			if (err) {
				return callback(err);
			}
			return callback(null, result);
		});
	},
};
