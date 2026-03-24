require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// POST ROUTE (SAVE DATA)
app.post("/submit", async (req, res) => {
  try {
    console.log("Received data:", req.body);  // DEBUG

    const student = new Student(req.body);
    await student.save();

    console.log("Saved successfully");  // DEBUG

    res.status(200).json({
      message: "Form received and saved to MongoDB"
    });
  } catch (error) {
    console.error("Error saving:", error);
    res.status(500).json({
      message: "Error saving data to MongoDB"
    });
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend server running on port " + PORT);
});