import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import workoutRoutes from "./routes/workouts.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/workouts", workoutRoutes);

app.get("/", (req, res) => {
    res.send("FitBook server running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});