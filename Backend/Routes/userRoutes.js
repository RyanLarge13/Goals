const express = require('express');
const router = express.Router();
const { getUser, loginUser, registerUser } = require('../Controllers/userController');
const { protect } = require('../Middlewear/authMiddlewear');

router.get('/me', protect, getUser);
router.post("/login", loginUser);
router.post('/', registerUser);

module.exports = router;