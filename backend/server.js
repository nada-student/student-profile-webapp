require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");

const app = express();
app.use(cors());
app.use(express.json());
app.post("/submit", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();

    res.status(200).json({
      message: "Form received and saved to MongoDB"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error saving data to MongoDB"
    });
  }
});



// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend server running on port " + PORT);
});
