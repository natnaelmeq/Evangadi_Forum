const router = require("express").Router();

const { createAnswer, allAnswers } = require("./answer.conroller.jsx");


router.post("/", createAnswer);
router.get("/allAnswer", allAnswers);
// router.get("/answer/:id", answerById);


module.exports = router;
