const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

const app = express();

// 1. Load Environment Variables
dotenv.config();

// 2. Connect to MongoDB
connectDB();

// 3. CORS Configuration
const allowedOrigins = [
  "http://localhost:3000", // For local development
  "https://traitemate-personality-predictor-app.onrender.com", // Your Render Backend URL
  // ADD your Frontend URL here once you deploy the Static Site on Render
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// 4. Middleware
app.use(express.json());

// 5. Routes
app.use("/api", require("./routes/index"));

// 6. Root Route for Health Check
app.get("/", (req, res) => {
  res.send("TraiteMate API is running...");
});

// 7. Port Handling
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});