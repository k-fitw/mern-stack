require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

// connect to mongodb & listen for requests
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & server started on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

//cannot be loaded because running scripts is disabled on this system
//just add a name to the script! in the package.json file for the nodemon script
// "dev": "nodemon server.js"

process.env;
