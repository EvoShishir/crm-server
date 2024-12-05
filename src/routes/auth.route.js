import express from "express";
import { register } from "../controllers/registration.controller.js";
import { login } from "../controllers/login.controller.js";
import { logout } from "../controllers/logout.controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post(".logout", logout);

export default authRoutes;
