import express from "express";

import {
    upload,
    getDataPria,
    getDataPriaById,
    createDataPria,
    updateDataPria,
    deleteDataPria
} from "../controllers/dataPriaController.js";

const router = express.Router();

router.get("/datapria", getDataPria);
router.get("/datapria/:id", getDataPriaById);
router.post("/datapria", upload.single('foto_pria'), createDataPria);
router.patch("/datapria/:id", upload.single('foto_pria'), updateDataPria);
router.delete("/datapria/:id", deleteDataPria);

export default router;