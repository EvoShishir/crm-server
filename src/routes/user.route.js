import express from "express";
import { getMyProfile } from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";

const userRoutes = express.Router();

userRoutes.get("/me", auth, getMyProfile);

export default userRoutes;
