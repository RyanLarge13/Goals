const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const { errorHandler } = require("./Middlewear/errorMiddlewear");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/goals", require("./Routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Your server is running on port ${port}`));
