const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollno: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model("Student", studentSchema);
