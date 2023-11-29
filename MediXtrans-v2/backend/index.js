const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/index");
const { config } = require("dotenv");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { swaggerServe, swaggerSetup } = require("./data/swaggerConfig");

const app = express();
config({
  path: "./data/config.env",
});
// console.log(process.env.MONGO_URI);

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("common"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully.");
  }
});

app.use(cookieParser());

app.use("/api-docs", swaggerServe, swaggerSetup);
app.use(express.json());
app.use("/api", router);
