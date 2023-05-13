const { register, login } = require("../controllers/authControllers");
const { checkUser } = require("../middlewares/authMiddleware");
const { sendMail } = require("../controllers/sendMail");
const router = require("express").Router();

router.post("/", checkUser);
router.post("/register", register);
router.post("/login", login);
router.post("/sendMail", sendMail);

module.exports = router;
