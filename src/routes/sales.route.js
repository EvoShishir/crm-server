import express from "express";
import { getSale, newSale } from "../controllers/sales.controller.js";
import auth from "../middleware/auth.js";

const salesRoutes = express.Router();

salesRoutes.post("/new", auth, newSale);
salesRoutes.get("/", auth, getSale);

export default salesRoutes;
