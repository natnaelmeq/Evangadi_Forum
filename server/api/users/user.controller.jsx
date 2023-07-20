const {
	register,
	getAllUsers,
	userById,
	getUserByEmail,
	profile,
} = require("./user.service.jsx");
const pool = require("../../config/database.jsx");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
require("dotenv").config();

const { get } = require("./user.router.jsx");

module.exports = {
	createUser: (req, res) => {
		const { userName, firstName, lastName, email, password } = req.body;
		console.log(req.body);
		if (!userName || !firstName || !lastName || !email || !password)
			return res.status(400).json({ msg: "Not all fields have been provided " });

		if (password.length < 8)
			return res
				.status(400)
				.json({ msg: "Password must be at least 8 characters long." });

		pool.query(
			"SELECT * FROM registration WHERE user_email = ?",
			[email],
			(err, results) => {
				if (err) {
					return res.status(500).json({ msg: "Database connection error" });
				}

				if (results.length > 0) {
					return res
						.status(400)
						.json({ msg: "An account with this email already exists." });
				} else {
					const salt = bcrypt.genSaltSync();
					const hashedPassword = bcrypt.hashSync(password, salt);
					// console.log(password)
					// console.log(hashedPassword)
					// console.log(req.body)

					register(
						{ userName, email, password: hashedPassword },
						(err, result) => {
							if (err) {
								console.log(err);
								return res
									.status(500)
									.json({ msg: "Database connection error" });
							}

							const userId = result.insertId;
							console.log(userId);

							profile({ userId, firstName, lastName }, (err, results) => {
								if (err) {
									console.log(err);
									return res.status(500).json({ msg: "Data connection error" });
								}

								return res
									.status(200)
									.json({ msg: "New user added successfully", data: results });
							});
						}
					);
				}
			}
		);
	},
	
	getUsers: (req, res) => {
		getAllUsers((err, result) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			return res.status(200).json({ data: result });
		});
	},

	getUserById: (req, res) => {
		userById(req.id, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ msg: "database connection err" });
			}
			if (!results) {
				return res.status(404).json({ msg: "Record not found" });
			}
			return res.status(200).json({ data: results });
		});
	},
	login: (req, res) => {
		const { email, password } = req.body;
		//validation
		if (!email || !password)
			return res.status(400).json({ msg: "NOt all fields have been provided" });
		getUserByEmail(email, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).json({ msg: "database connection err" });
			}
			if (!results) {
				return res
					.status(404)
					.json({ msg: "No account with this email has been registered" });
			}
			const isMatch = bcrypt.compareSync(password, results.user_password);
			if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });
			const token = jwt.sign({ id: results.user_id }, process.env.JWT_SECRET, {
				expiresIn: "3h",
				
			});
			console.log(token)
			console.log(email, password)
			// console.log(results)
			return res.json({
				token,
				user: { id: results.user_id, display_name: results.user_name },
				
			});
			
		});
	},
};

