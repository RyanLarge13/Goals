const getGoals = (req, res) => {
  res.status(200).send("Got goal.");
};

const setGoal = (req, res) => {
  res.status(200).send("Made a new goal!");
};

module.exports = {
  getGoals,
  setGoal,
};
