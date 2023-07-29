import express from "express";

import {
    getTheme,
    getThemeById,
    createTheme,
    updateTheme,
    deleteTheme,
<<<<<<< HEAD
    getThemeByIdUndangan,
=======
    getThemeByIdUndangan
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
} from "../controllers/themeController.js";

const router = express.Router();

router.get("/theme", getTheme);
router.get("/theme/:id", getThemeById);
router.get("/tema/:id_undangan", getThemeByIdUndangan);
router.post("/theme", createTheme);
router.patch("/theme/:id", updateTheme);
router.delete("/theme/:id", deleteTheme);

export default router;