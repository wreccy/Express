// Import Express
import express from "express";

// Import page controller
import { Home, About, Contact } from "../controllers/page.controller.js";

// Init Express router
const router = express.Router();

// Home route
router.get("/", Home);

// About route
router.get("/about", About);

// Contact route
router.get("/contact", Contact);

// Export default router
export default router;
