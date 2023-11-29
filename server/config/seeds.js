const db = require('./connection');
const { User, TypingScore } = require('../models');
const cleanDB = require('./cleanDB');

const seedData = async () => {
  try{

  await cleanDB('TypingScore', 'typingScores');
  await cleanDB('User', 'users');

  await User.create({
    userName: 'Pamela96',
    email: 'pamela@testmail.com',
    password: 'password12345',
    typingScore: [
      {
        wordsPerMinute: 61,
        accuracy: 80,
        testDate: 11152023,
      }
    ]
  });

  await User.create({
    userName: 'Elijah78',
    email: 'eholt@testmail.com',
    password: 'password12345',
    typingScore: [
      {
        wordsPerMinute: 61,
        accuracy: 80,
        testDate: 11152023,
      }
    ]
  });

  console.log('users seeded');
} catch(error) {
  console.error('Error seeding data:', error);
} finally {
  process.exit();
}
}
