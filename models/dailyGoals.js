const mongoose = require('mongoose');

const DailyGoalsSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  goalsStr: {
    type: String,
    required: true,
  },
  goalsArr: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('dailyGoals', DailyGoalsSchema);
