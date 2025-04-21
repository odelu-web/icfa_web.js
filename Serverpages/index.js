// import express from "express";
// import cors from "cors";
// import authRouter from "./routes/authRoutes.js";

// const app = express();
// app.use(
//   cors({
//     // origin: "http://localhost:3000", // React app's URL
//     origin: "http://localhost:3000", // Replace with the production React app's URL
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type,Authorization", // Allowed headers
//   })
// );
// app.use(express.json());
// app.use("/auth", authRouter);

// app.listen(process.env.PORT, () => {
//   console.log("server is running");
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";

dotenv.config(); // Make sure to load .env variables

const app = express();

// Define allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://testonline.ifheindia.org",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true, // Allow credentials if needed
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/auth", authRouter);

// Use default port or fallback
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
