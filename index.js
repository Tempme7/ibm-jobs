const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// ✅ Replace with your real JSON data
const jobs = [
  { id: 1, title: "Frontend Developer", company: "IBM", applyLink: "https://ibm.com/careers/1" },
  { id: 2, title: "Backend Developer", company: "IBM", applyLink: "https://ibm.com/careers/2" },
  { id: 3, title: "AI Engineer", company: "IBM", applyLink: "https://ibm.com/careers/3" },
];

// API endpoint
app.get("/api/jobs", (req, res) => {
  res.json({
    success: true,
    count: jobs.length,
    data: jobs,
  });
});

// ✅ Port must be dynamic (Render sets process.env.PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
