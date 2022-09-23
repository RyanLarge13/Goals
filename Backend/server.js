const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();

app.use("/goals", require("./Routes/goalRoutes"));

app.listen(port, () => console.log(`Your server is running on port ${port}`));
