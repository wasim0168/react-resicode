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
   ✅ FIXED CORS (IMPORTANT)
========================= */
app.use(
  cors({
    origin: [
      "https://resicode.com",
      "https://www.resicode.com"
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// 👇 Preflight support (VERY IMPORTANT)
app.options("*", cors());

/* =========================
   Rate Limiting
========================= */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
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
   Logger
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
   Health
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

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend is working 🚀"
  });
});

/* =========================
   404
========================= */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found"
  });
});

/* =========================
   Error Handler
========================= */
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error"
    
  });
  next()
});

/* =========================
   Start
========================= */
app.listen(PORT, () => {
  console.log(`
🚀 RESICODE Backend LIVE
====================================
🌐 Frontend : https://resicode.com
🔗 Backend  : https://react-resicode-1.onrender.com
📍 Port     : ${PORT}

✅ CORS FIXED
====================================
`);
});
