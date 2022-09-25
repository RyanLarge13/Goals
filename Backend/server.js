const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8080;
const connectDB = require("./Config/db");
const { errorHandler } = require("./Middlewear/errorMiddlewear");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/goals", require("./Routes/goalRoutes"));
app.use("/users", require("./Routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Your server is running on port ${port}`));
