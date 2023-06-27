import express from "express";

import {
    upload,
    getCouple,
    getCoupleById,
    createCouple,
    updateCouple,
    deleteCouple
} from "../controllers/coupleController.js";

const router = express.Router();

router.get("/couple", getCouple);
router.get("/couple/:id", getCoupleById);
router.post("/couple", upload.single('image'), createCouple);
router.patch("/couple/:id", upload.single('image'), updateCouple);
router.delete("/couple/:id", deleteCouple);

export default router;