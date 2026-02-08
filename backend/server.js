const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Allow requests from Live Server
app.use(cors({
  origin: "http://127.0.0.1:5500"
}));

app.use(express.json());

app.post("/student", (req, res) => {
  console.log("Received data:", req.body);
  res.status(200).json({ message: "Student data saved successfully" });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log("Backend server running on port 5000");
});
