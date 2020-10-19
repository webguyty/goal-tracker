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

// @route		POST api/dailyGoals
// @desc		Creates a daily goal list
// @access	Private
router.delete('/goal/:id', auth, async (req, res) => {
  try {
    const goal = await DailyGoals.findById(req.params.id);

    if (!goal) return res.status(404).json({ msg: 'Goal not found' });

    if (goal.userID.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await DailyGoals.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Contact Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
