const mongoose = require('mongoose');

const DailyGoalsSchema = mongoose.Schema({
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
