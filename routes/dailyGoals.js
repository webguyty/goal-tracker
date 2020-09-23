const express = require('express');
const router = express.Router();

// @route		POST api/dailyGoals
// @desc		Creates a daily goal list
// @access	Public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
