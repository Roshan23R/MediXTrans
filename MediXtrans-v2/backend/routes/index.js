const express = require("express");
const userRouter = require("./authRoutes");
const textTableRouter = require("./textTableRoutes");
const gptRouter = require("./gptRoutes");

const { connectDB } = require("../data/database");

connectDB();
var router = new express.Router();

router.get("/", (req, res) => {
  res.send("Index Routes rendered !");
});

router.use("/user", userRouter);
router.use("/text", textTableRouter);
router.use("/gpt", gptRouter);
module.exports = router;

//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