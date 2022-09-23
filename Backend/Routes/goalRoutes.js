const express = require("express");
const router = express.Router();
const { getGoals, setGoal } = require("../Controllers/goalController");

router.get("/", getGoals);

router.post("/", setGoal);

router.put("/:id", (req, res) => {
  res.status(200).send(`Goal ${req.params.id} was succesfully updated.`);
});

router.delete("/:id", (req, res) => {
  res.status(200).send(`Goal ${req.params.id} was succesfully deleted.`);
});

module.exports = router;
