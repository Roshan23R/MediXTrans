const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
  patientid: {
    type: String,
    required: true
  },
  text_data:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model("textTable", textSchema);
