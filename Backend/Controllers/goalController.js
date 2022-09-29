const asyncHandler = require("express-async-handler");
const Goal = require("../Models/goalModel");
const User = require('../Models/userModel');

const getGoals = asyncHandler(async (req, res) => {
  const allGoals = await Goal.find({ user: req.user.id });
  res.status(200).json(allGoals);
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw Error("Please add a text field.");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  })
  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  } 

  if (!req.user) {
    res.status(401);
    throw new Error('User not found.');
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('USer not authorized');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  } 

    if (!req.user) {
      res.status(401);
      throw new Error("User not found.");
    }

    if (goal.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("USer not authorized");
    }

  await goal.remove()

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
