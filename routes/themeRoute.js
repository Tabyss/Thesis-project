import express from "express";

import {
    getTheme,
    getThemeById,
    createTheme,
    updateTheme,
    deleteTheme
} from "../controllers/themeController.js";

const router = express.Router();

router.get("/theme", getTheme);
router.get("/theme/:id", getThemeById);
router.post("/theme", createTheme);
router.patch("/theme/:id", updateTheme);
router.delete("/theme/:id", deleteTheme);

export default router;