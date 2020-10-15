const express = require('express');
const router = express.Router();

const DailyGoals = require('../models/DailyGoals');

// @route		POST api/dailyGoals
// @desc		Creates a daily goal list
// @access	Public
router.post('/', async (req, res) => {
  const { userID, goalsStr, goalsArr } = req.body;
  const dailyGoals = await new DailyGoals({ user, goalsStr, goalsArr });
  res.send('Register a user');
});

module.exports = router;
