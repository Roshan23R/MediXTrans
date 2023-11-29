const express = require("express");
const router = express.Router();
// const bodyParser = require('body-parser');
const chatController = require("../controllers/gptController");

// app.use(bodyParser.json());

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // 60 requests per minute
  message: "Rate limit exceeded. Please try again later.",
});

// Apply the rate limiter to the specific route
// app.post('/process-message', limiter, chatController.processMessage);

// Define the route using the controller function
router.post("/process-message", chatController.processMessage);
router.post("/find-complexity", chatController.Complexity);

module.exports = router;
