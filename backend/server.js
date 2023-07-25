import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
import { notFount, errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "hello",
  });
});

app.use(notFount);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port :${port} `);
});
