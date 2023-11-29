const mongoose = require("mongoose");

const transSchema = new mongoose.Schema({
  trans_data:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model("transTable", transSchema);
