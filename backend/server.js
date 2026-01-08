const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Routes
const contactRoutes = require("./routes/contactRoutes");

// Security
app.use(helmet());

// CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["http://localhost:3000"];

app.use(cors({ origin: (origin, cb) => (!origin || allowedOrigins.includes(origin) ? cb(null, true) : cb(new Error("Not allowed by CORS"))), credentials: true }));

// Rate limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use("/api/", limiter);

// Body parsers
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.use("/api/contact", contactRoutes);

// Health
app.get("/api/health", (req, res) => res.json({ status: "healthy", service: "resicode-backend", timestamp: new Date().toISOString() }));

// 404
app.use("*", (req, res) => res.status(404).json({ success: false, message: "Endpoint not found" }));

// Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack || err.message);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message
  });
});

// Start
app.listen(PORT, () => {
  console.log(`🚀 RESICODE Backend Running at port ${PORT}`);
});
