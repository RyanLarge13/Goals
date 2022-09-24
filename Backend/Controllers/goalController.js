const asyncHandler = require("express-async-handler");
const Goal = require("../Models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const allGoals = Goal.find();
  res.status(200).json(allGoals);
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw Error("Please add a text field.");
  }
  res.status(200).send("Made a new goal!");
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).send(`You updated your goal: ${req.params.id}`);
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).send(`You have deleted your goal: ${req.params.id}`);
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
