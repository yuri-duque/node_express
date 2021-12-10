require("express-async-errors");
const express = require("express");
const dotenv = require("dotenv");

const routes = require("./routes");
const handleErrors = require("./middleware/handleErrors");

// get .env file make available environment variables
dotenv.config();


const app = express(); // create express aplication

app.use(express.json()); // recognize the incomin request objects as JSON

app.use(express.urlencoded({ extended: true })); // use a 'querystring' library

app.use("/", routes); // use application routes

app.use(handleErrors); // use custom error handler

const port = process.env.PORT || 5000; // set application port

app.listen(port, () => {
  console.log(`Application is running at http://localhost:${port}`);
});
