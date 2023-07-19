const router = require("express").Router();

const {
	createAnswer,
	// allAnswers,
	getAnswers,
} = require("./answer.conroller.jsx");


router.post("/", createAnswer);
router.get("/allAnswerForQ/:id", getAnswers);
// router.get("/allAnswer", allAnswers);
// router.get("/answer/:id", answerById);


module.exports = router;
