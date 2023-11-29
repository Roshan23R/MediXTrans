const express = require("express");
const router = express.Router();

const {
  getMyProfile,
  login,
  logout,
  register,
} = require("../controllers/authControllers");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);

router.get("/logout", logout);

router.get("/getMyProfile", isAuthenticated, getMyProfile);
module.exports = router;
