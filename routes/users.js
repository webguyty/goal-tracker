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
  const { username, password } = req.body;
  const user = new User({ username, password });
});

// @route		GET api/users
// @desc		Get all users
// @access 	Public

router.get('/', async (req, res) => {
  const users = await User.find();

  res.json(users);
});

module.exports = router;
