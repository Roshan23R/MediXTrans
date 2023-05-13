const express = require("express");
const authRouter = require("./authRoutes");
const textTableRouter = require("./textTableRoutes");
const sendMail = require("./authRoutes")


var router = new express.Router();

router.get("/", (req, res) => {
  res.send("Index Routes rendered !");
});


router.use("/sendMail", sendMail);
router.use("/auth", authRouter);
router.use("/text", textTableRouter);
module.exports = router;
