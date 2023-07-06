import express from "express";

import {
    getEvent,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
    getEventByIdUndangan
} from "../controllers/eventController.js";

const router = express.Router();

router.get("/event", getEvent);
router.get("/event/:id", getEventById);
router.get("/acara/:id_undangan", getEventByIdUndangan);
router.post("/event", createEvent);
router.patch("/event/:id", updateEvent);
router.delete("/event/:id", deleteEvent);

export default router;