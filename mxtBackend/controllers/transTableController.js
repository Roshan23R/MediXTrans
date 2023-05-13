const TansTable = require("../model/tansTableModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "kishan sheth super secret key", {
    expiresIn: maxAge,
  });
};
module.exports.generateTans = async (req, res, next) => {
  try {
    const { patientid, tans_data } = req.body;
    console.log(req.body);
    const tansTable = await TansTable.create({ patientid, tans_data });
    const token = createToken(tansTable._id);

    res.status(201).json({ tans_id: tansTable._id, created: true });
  } catch (err) {
    console.log(err);
    res.json({ err, created: false });
  }
};

module.exports.getTans = async (req, res) => {
  try {
    const tansTable = await TansTable.find();
    res.status(200).json(tansTable);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports.getTansById = async (req, res) => {
  try {
    const tansTable = await TansTable.findById(req.params.id);
    res.status(200).json(tansTable);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports.updateTans = async (req, res) => {
  try {
    const { patientid, tans_data } = req.body;
    const tansTable = await TansTable.findByIdAndUpdate(
      req.params.id,
      { patientid, tans_data },
      { new: true }
    );
    res.status(200).json(tansTable);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports.deleteTans = async (req, res) => {
  try {
    const tansTable = await TansTable.findByIdAndDelete(req.params.id);
    res.status(200).json(tanszTable);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
