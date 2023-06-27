import express from "express";

import {
    upload,
    getDataWanita,
    getDataWanitaById,
    createDataWanita,
    updateDataWanita,
    deleteDataWanita
} from "../controllers/dataWanitaController.js";

const router = express.Router();

router.get("/datawanita", getDataWanita);
router.get("/datawanita/:id", getDataWanitaById);
router.post("/datawanita", upload.single('image'), createDataWanita);
router.patch("/datawanita/:id", upload.single('image'), updateDataWanita);
router.delete("/datawanita/:id", deleteDataWanita);

export default router;