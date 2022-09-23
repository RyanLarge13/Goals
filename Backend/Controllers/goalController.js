const getGoals = (req, res) => {
  res.status(200).send("Got goal.");
  console.log('Got!')
};

const setGoal = (req, res) => {
  res.status(200).send("Made a new goal!");
};

module.exports = {
  getGoals,
  setGoal,
};
