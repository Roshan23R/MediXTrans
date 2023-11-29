const TextTable = require("../model/textTableModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "kishan sheth super secret key", {
    expiresIn: maxAge,
  });
};
module.exports.generateText = async (req, res, next) => {
  try {
    const { patientid, text_data } = req.body;
    console.log(req.body);
    const textTable = await TextTable.create({ patientid, text_data });
    const token = createToken(textTable._id);

    res.status(201).json({ text_id: textTable._id, created: true });
  } catch (err) {
    console.log(err);
    res.json({ err, created: false });
  }
};

module.exports.getText = async (req, res) => {
  try {
    const textTable = await TextTable.find();
    res.status(200).json(textTable);
    console.log(textTable);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports.getTextById = async (req, res) => {
  try {
    const textTable = await TextTable.findById(req.params.id);
    res.status(200).json(textTable);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
module.exports.findOne = async (req, res) => {
  try {
    const lastElement = await TextTable.findOne().sort({ _id: -1 }); // find the last element by sorting in descending order based on the "_id" field
    res.status(200).json(lastElement); // send the last element as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.updateText = async (req, res) => {
  try {
    const { patientid, text_data } = req.body;
    const textTable = await TextTable.findByIdAndUpdate(
      req.params.id,
      { patientid, text_data },
      { new: true }
    );
    res.status(200).json(textTable);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports.deleteText = async (req, res) => {
  try {
    const textTable = await TextTable.findByIdAndDelete(req.params.id);
    res.status(200).json(textTable);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
