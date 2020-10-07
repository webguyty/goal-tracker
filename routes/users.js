const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

// @route		POST api/users
// @desc		Register a user
// @access 	Public

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ msg: 'Username already exists' });
    }

    // Create user
    user = await new User({ username, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route		GET api/users
// @desc		Get all users
// @access 	Public

router.get('/', async (req, res) => {
  const users = await User.find();

  res.json(users);
});

module.exports = router;
