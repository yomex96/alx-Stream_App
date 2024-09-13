import express from "express";
import { authCheck, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// Setup Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// API endpoints for authentication
router.get("/authCheck", protectRoute, authCheck);

export default router;