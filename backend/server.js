const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ================================
   🔥 CORS CONFIG (IMPORTANT)
================================ */
const corsOptions = {
  origin: [
    "https://resicode.com",
    "https://www.resicode.com",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false
};

app.use(cors(corsOptions));

/* 🔥 HANDLE PREFLIGHT (OPTIONS) */
app.options("*", cors(corsOptions));

/* ================================
   MIDDLEWARES
================================ */
app.use(express.json());

/* ================================
   ROUTES
================================ */
app.use("/api/contact", require("./routes/contactRoutes"));

/* ================================
   ROOT & HEALTH (OPTIONAL)
================================ */
app.get("/", (req, res) => {
  res.send("RESICODE Backend Running 🚀");
});

/* ================================
   SERVER
================================ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
