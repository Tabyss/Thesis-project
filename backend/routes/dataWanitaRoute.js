import express from "express";

import {
    upload,
    getDataWanita,
    getDataWanitaById,
    getDataWanitaByIdUndangan,
    createDataWanita,
    updateDataWanita,
    deleteDataWanita,
} from "../controllers/dataWanitaController.js";

const router = express.Router();

router.get("/datawanita", getDataWanita);
router.get("/datawanita/:id", getDataWanitaById);
router.get("/wanita/:id_undangan", getDataWanitaByIdUndangan);
router.post("/datawanita", upload.single('foto_wanita'), createDataWanita);
router.patch("/datawanita/:id", upload.single('foto_wanita'), updateDataWanita);
router.delete("/datawanita/:id", deleteDataWanita);

export default router;