import express from "express";
import { listEvents,listEvent } from "../contollers/events";

const router = express.Router();

router.get('/',listEvents);
router.get('/:id',listEvent);
router.post('/')

export default router;