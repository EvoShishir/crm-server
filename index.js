import express from "express";
import "dotenv/config";
import { connectDB } from "./src/config/db.config.js";
import cors from "cors";
import authRoutes from "./src/routes/auth.route.js";

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
connectDB();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
