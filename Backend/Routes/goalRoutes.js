const express = require("express");
const router = express.Router();
import { getGoals, setGoal } = require("../Controllers/goalController.js");

router.get("/", getGoals);

router.post("/", (req, res) => {
  res.status(200).send("New goal added.");
});

router.put("/:id", (req, res) => {
  res.status(200).send(`Goal ${req.params.id} was succesfully updated.`);
});

router.delete("/:id", (req, res) => {
  res.status(200).send(`Goal ${req.params.id} was succesfully deleted.`);
});

module.exports = router;
