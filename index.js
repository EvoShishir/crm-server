import express from "express";
import "dotenv/config";
import { connectDB } from "./src/config/db.config.js";
import cors from "cors";
import authRoutes from "./src/routes/auth.route.js";
import userRoutes from "./src/routes/user.route.js";
import cookieParser from "cookie-parser";
import salesRoutes from "./src/routes/sales.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const port = process.env.PORT;
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/sales", salesRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
