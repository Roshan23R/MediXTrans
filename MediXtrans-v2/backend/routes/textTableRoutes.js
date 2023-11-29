const { generateText, findOne } = require("../controllers/textTableController");

const router = require("express").Router();

router.post("/generate", generateText);
router.get("/get", findOne);

module.exports = router;
