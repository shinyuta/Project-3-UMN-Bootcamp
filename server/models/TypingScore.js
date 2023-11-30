const mongoose = require('mongoose');

const { Schema } = mongoose;

const typingScoreSchema = new Schema({
  wordsPerMinute: {
    type: Number,
    required: true,
  },
  accuracy: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  testDate: {
    type: Date,
    default: Date.now,
    required: true
  },
});

const TypingScore = mongoose.model('TypingScore', typingScoreSchema);

module.exports = TypingScore;
