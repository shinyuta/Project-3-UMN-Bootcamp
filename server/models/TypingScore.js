const mongoose = require('mongoose');

const { Schema } = mongoose;

const typingScoreSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
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
  },
});

const TypingScore = mongoose.model('TypingScore', typingScoreSchema);

module.exports = TypingScore;


// for accuracy percentage
// accTag.innerText = ${Math.round(100 - ((mistakes / charIndex) * 100))}%;

// for average wpm
// scoreSchema.virtual("averageScore").get(function(){
//   return this.scores.reduce((acc,score)=> score + acc,0)/this.scores.length
