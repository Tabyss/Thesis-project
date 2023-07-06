import express from "express";

import {
    upload,
    getGallery,
    getGalleryById,
    createGallery,
    updateGallery,
    deleteGallery,
    getGalleryByIdUndangan
} from "../controllers/galleryController.js";

const router = express.Router();

router.get("/gallery", getGallery);
router.get("/gallery/:id", getGalleryById);
router.get("/galeri/:id_undangan", getGalleryByIdUndangan);
router.post('/gallery', upload.single('foto_gallery') , createGallery);
router.patch("/gallery/:id", upload.single('foto_gallery'), updateGallery);
router.delete("/gallery/:id", deleteGallery);

export default router;