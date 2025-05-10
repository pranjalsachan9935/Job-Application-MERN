const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectToDb = require("./db/db");
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./routes/userRouter");
const cors = require("cors");

const allowedOrigins = [
  "https://job-application-mern-txz1.vercel.app",
  "http://localhost:3000" // for local development
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options("*", cors(corsOptions));

app.use(express.json());
connectToDb();

app.get("/", (req, res) => {
  res.send("Hey from new server to restart from git");
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
