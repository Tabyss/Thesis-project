import express from "express";

import {
    upload,
    getCouple,
    getCoupleById,
    getCoupleByIdUndangan,
    createCouple,
    updateCouple,
    deleteCouple,
} from "../controllers/coupleController.js";

const router = express.Router();

router.get("/couple", getCouple);
router.get("/couple/:id", getCoupleById);
router.get("/pasangan/:id_undangan", getCoupleByIdUndangan);
router.post("/couple", upload.single('foto_cover'), createCouple);
router.patch("/couple/:id", upload.single('foto_cover'), updateCouple);
router.delete("/couple/:id", deleteCouple);

export default router;