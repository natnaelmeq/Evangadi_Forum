const router = require("express").Router();

const {
	createQuestion,
	questions,
	questionById,
} = require("./question.controller.jsx");

const {questionDashbord}=require('./dashbord.jsx');
const auth = require("../middleware/auth.jsx");

router.post("/", createQuestion);
router.get("/dashbord", questionDashbord);
router.get("/allQuestion", questions);
router.get("/question/:id", questionById);

module.exports = router;
