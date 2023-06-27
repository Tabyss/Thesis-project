import express from "express";

import {
    getEvent,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
} from "../controllers/eventController.js";

const router = express.Router();

router.get("/event", getEvent);
router.get("/event/:id", getEventById);
router.post("/event", createEvent);
router.patch("/event/:id", updateEvent);
router.delete("/event/:id", deleteEvent);

export default router;