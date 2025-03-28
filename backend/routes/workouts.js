const express = require("express");
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

//we don't have access to the app object here, so we need to create a new router object
const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

//POST a workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);
//UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
