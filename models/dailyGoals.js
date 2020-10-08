const mongoose = require('mongoose');

const DailyGoalsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  goals: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('dailyGoals', DailyGoalsSchema);
