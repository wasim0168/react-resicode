const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Routes
const contactRoutes = require("./routes/contactRoutes");

/* =========================
   Security Middleware
========================= */
app.use(helmet());

/* =========================
   CORS Configuration
========================= */
const allowedOrigins = [
  "https://resicode.com",
  "https://www.resicode.com",
  "http://localhost:3000",
  "http://localhost:5173"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

/* =========================
   Rate Limiting
========================= */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
});

app.use("/api/", limiter);

/* =========================
   Body Parsers
========================= */
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

/* =========================
   Request Logger
========================= */
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`
  );
  next();
});

/* =========================
   Routes
========================= */
app.use("/api/contact", contactRoutes);

/* =========================
   Health Check
========================= */
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    service: "resicode-backend",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

/* =========================
   Test Endpoint
========================= */
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend is working 🚀",
    endpoints: {
      contact: "/api/contact/send",
      health: "/api/health",
      test: "/api/test"
    }
  });
});

/* =========================
   404 Handler
========================= */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
    path: req.originalUrl
  });
});

/* =========================
   Global Error Handler
========================= */
app.use((err, req, res) => {
  console.error("❌ Server Error:", err.message);

  res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message
  });
});

/* =========================
   Start Server
========================= */
app.listen(PORT, () => {
  console.log(`
🚀 RESICODE Backend Running
====================================
🌐 Environment : ${process.env.NODE_ENV || "development"}
📍 Port        : ${PORT}
🔗 Backend URL : https://react-resicode-1.onrender.com

🌍 Allowed Frontend:
• https://resicode.com
• https://www.resicode.com

📡 Endpoints:
• POST   /api/contact/send
• GET    /api/health
• GET    /api/test

📧 Email Configured:
${process.env.EMAIL_USER ? "✅ YES" : "⚠️ NO"}

====================================
`);
});
