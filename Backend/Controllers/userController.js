const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHander = require('express-async-handler');
const User = require('../Models/userModel');

const registerUser = asyncHander(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add login information')
    }
    const userExsits = await User.findOne({email})

    if (userExsits) {
        res.status(400);
        throw new Error('User already exsits');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email, 
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToke(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

const loginUser = asyncHander(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email});

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToke(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid cridentials');
  }
});

const getUser = asyncHander(async (req, res) => {
  res.status(200).json(req.user);
});

const generateToke = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = {
  registerUser,
  getUser,
  loginUser,
};
