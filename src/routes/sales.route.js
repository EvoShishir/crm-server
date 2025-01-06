import express from "express";
import {
  deleteSaleData,
  getAllSales,
  newSale,
  updateSale,
} from "../controllers/sales.controller.js";
import auth from "../middleware/auth.js";

const salesRoutes = express.Router();

salesRoutes.post("/new", auth, newSale);
salesRoutes.get("/", auth, getAllSales);
salesRoutes.patch("/:id", auth, updateSale);
salesRoutes.delete("/:id", auth, deleteSaleData);

export default salesRoutes;
