import express from "express";
import { register } from "../controllers/registration.controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);

export default authRoutes;
