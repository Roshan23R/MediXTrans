const { User } = require("../model/userModel");
const bcrypt = require("bcrypt");
const { sendCookie } = require("../utils/features.js");
const ErrorHandler = require("../middlewares/error.js");

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return next(new ErrorHandler("Invalid Email or Password", 400));

    sendCookie(user, res, "Login Successfully", 200);
  } catch (error) {
    next(error);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const { email, password, confirmPassword } = req.body;

    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User Already Exist", 400));
    if (password !== confirmPassword)
      return next(
        new ErrorHandler("Password do not match with confirm password", 400)
      );

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({ email, password: hashedPassword });
    sendCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};

module.exports.getMyProfile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

module.exports.logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Develpoment" ? false : true,
    })
    .json({
      success: true,
      user: req.user,
    });
};
