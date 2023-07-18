// const pool = require("../../config/database.jsx");

// // ...

// const questionDashbord = (req, res) => {
// 	pool.query(
// 		"SELECT question, user_id FROM question order by question_id desc",
// 		[],
// 		(err, result) => {
// 			if (err) {
// 				return res.status(500).json({
// 					success: false,
// 					message: "Error question dashboard",
// 					error: err,
// 				});
// 			}
// 			return res.status(200).json({
// 				success: true,
// 				data: result,
// 			});
// 		}
// 	);
// };

// module.exports = {
// 	questionDashbord,
// };

const pool = require("../../config/database.jsx");

// ...

const questionDashbord = (req, res) => {
	pool.query(
		"SELECT q.question,q.question_description,q.question_id , r.user_name FROM question q INNER JOIN registration r ON q.user_id = r.user_id ORDER BY q.question_id DESC",
		[],
		(err, result) => {
			if (err) {
				return res.status(500).json({
					success: false,
					message: "Error question dashboard",
					error: err,
				});
			}
			return res.status(200).json({
				success: true,
				data: result,
			});
		}
	);
};

module.exports = {
	questionDashbord,
};
