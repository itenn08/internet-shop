const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect("mongodb://localhost/shop");

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

app.use(morgan("dev"));

// parse application/json
app.use(bodyParser.json());

// Routes
app.use("/users", require("./routes/users"));
app.use("/verify-email", require("./routes/verifyEmail"));

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);
