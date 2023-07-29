import express from "express";

import {
    upload,
    getDataPria,
    getDataPriaById,
    createDataPria,
    updateDataPria,
    deleteDataPria,
<<<<<<< HEAD
    getDataPriaByIdUndangan,
=======
    getDataPriaByIdUndangan
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
} from "../controllers/dataPriaController.js";

const router = express.Router();

router.get("/datapria", getDataPria);
router.get("/datapria/:id", getDataPriaById);
router.get("/pria/:id_undangan", getDataPriaByIdUndangan);
router.post("/datapria", upload.single('foto_pria'), createDataPria);
router.patch("/datapria/:id", upload.single('foto_pria'), updateDataPria);
router.delete("/datapria/:id", deleteDataPria);

export default router;