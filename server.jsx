require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const Port = process.env.PORT;
const userRouter = require("./server/api/users/user.router.jsx");
const answerRouter = require("./server/api/answer/answer.router.jsx");
const questionRouter = require("./server/api/question/question.router.jsx");
const auth = require("./server/api/middleware/auth.jsx");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/users", userRouter);
app.use("/api/answer", answerRouter);
app.use("/api/question", questionRouter);

app.listen(Port, () => console.log(`Listening at http://localhost:${Port}`));
