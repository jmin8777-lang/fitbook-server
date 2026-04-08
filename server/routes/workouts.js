import express from "express";
import { createWorkout, getWorkouts } from "../controllers/workoutController.js";

const router = express.Router();

router.get("/", getWorkouts);
router.post("/", createWorkout);

export default router;