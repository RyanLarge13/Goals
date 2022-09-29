const express = require("express");
const path = require('path');
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
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../Frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'Frontend', 'build', 'index.html')));
}
app.use(errorHandler);

app.listen(port, () => console.log(`Your server is running on port ${port}`));
