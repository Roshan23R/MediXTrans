const mongoose = require("mongoose");
require('dotenv').config({ path: '/config.env' }); // Load environment variables from config.env file

module.exports.connectDB = () => {
  // console.log(process.env.MONGO_URI);
  mongoose
    .connect('mongodb+srv://harshitmishra655:harshit123@cluster.ctpnd7l.mongodb.net/?retryWrites=true', {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
