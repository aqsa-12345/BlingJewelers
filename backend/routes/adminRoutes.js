// adminRoutes.js
import express from "express";
import { adminLogin } from "../controllers/adminControllers.js";

const router = express.Router();

router.post("/admin-login", adminLogin);

export const adminRoutes = router; 
