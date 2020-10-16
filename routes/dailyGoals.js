const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const DailyGoals = require('../models/DailyGoals');

// @route		GET api/dailyGoals
// @desc		Creates a daily goal list
// @access	Private
router.get('/', auth, async (req, res) => {
  try {
    const goals = await DailyGoals.find({ userID: req.user.id }).sort({
      date: -1,
    });
    res.json(goals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @route		POST api/dailyGoals
// @desc		Creates a daily goal list
// @access	Private
router.post('/', auth, async (req, res) => {
  try {
    const { userID, goalsStr, goalsArr } = req.body;
    const dailyGoals = await new DailyGoals({ userID, goalsStr, goalsArr });
    const goal = await dailyGoals.save();
    res.json(goal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
