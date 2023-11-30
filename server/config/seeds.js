// C:\Users\majors\Documents\Bootcamp Repositories\Project-3-UMN-Bootcamp\server\config\seeds.js

const mongoose = require('mongoose');
const db = require('./connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

console.log('Users seeded successfully');
process.on('exit', (code) => {
  // Close the database connection
  db.close();
  console.log('Database connection closed');
});

const seedData = async () => {
  try {
    // Wait for the connection to be fully established
    await new Promise((resolve) => {
      mongoose.connection.once('open', resolve);
    });

    // Clean the database before seeding
    await cleanDB('User', 'users');

    // Your seeding logic here...
    await User.create({
      userName: 'Pamela96',
      email: 'pamela@testmail.com',
      password: 'password12345',
      typingScore: [
        {
          wordsPerMinute: 61,
          accuracy: 80,
          testDate: 11152023,
        },
      ],
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
        },
      ],
    });

    console.log('Users seeded successfully');
} catch (error) {
  if (error.code === 11000 && error.keyPattern && error.keyPattern.userName) {
    console.error('Duplicate userName found:', error.keyValue.userName);
  } else {
    console.error('Error seeding data:', error);
  }
  // If an error occurs, the 'exit' event will still be triggered.
  process.exit(1); // Exit with a non-zero status code to indicate an error.
}
};

// Call the seedData function
seedData();





// const mongoose = require('mongoose');
// const db = require('./connection');
// const { User } = require('../models');
// const cleanDB = require('./cleanDB');
// const yargs = require('yargs');

// // Configure yargs to handle the --file argument
// const argv = yargs
//   .option('file', {
//     describe: 'Path to the seed file',
//     type: 'string',
//     default: './seeds.js', // Default path if not provided
//   })
//   .help()
//   .argv;

// // Use seedFilePath in your seed logic
// const seedFilePath = argv.file;
// console.log('Seeding from file:', seedFilePath);

// const seedData = async () => {
//   try {
//     await cleanDB('TypingScore', 'typingScores');
//     await cleanDB('User', 'users');

//     await User.create({
//       userName: 'Pamela96',
//       email: 'pamela@testmail.com',
//       password: 'password12345',
//       typingScore: [
//         {
//           wordsPerMinute: 61,
//           accuracy: 80,
//           testDate: 11152023,
//         }
//       ]
//     });
  
//     await User.create({
//       userName: 'Elijah78',
//       email: 'eholt@testmail.com',
//       password: 'password12345',
//       typingScore: [
//         {
//           wordsPerMinute: 61,
//           accuracy: 80,
//           testDate: 11152023,
//         }
//       ]
//     });

//     console.log('users seeded');
//   } catch (error) {
//     console.error('Error seeding data:', error);
//   } finally {
//     process.exit();
//   }
// };

// // Call the seedData function
// seedData();





// const db = require('./connection');
// const { User, TypingScore } = require('../models');
// const cleanDB = require('./cleanDB');

// // Get the file path from command line arguments
// const filePathArg = process.argv.find(arg => arg.startsWith('--file='));
// const seedFilePath = filePathArg ? filePathArg.split('=')[1] : './default-seed-file.js';

// // Use seedFilePath in your seed logic
// console.log('Seeding from file:', seedFilePath);

// const seedData = async () => {
//   try{

//   await cleanDB('TypingScore', 'typingScores');
//   await cleanDB('User', 'users');

//   await User.create({
//     userName: 'Pamela96',
//     email: 'pamela@testmail.com',
//     password: 'password12345',
//     typingScore: [
//       {
//         wordsPerMinute: 61,
//         accuracy: 80,
//         testDate: 11152023,
//       }
//     ]
//   });

//   await User.create({
//     userName: 'Elijah78',
//     email: 'eholt@testmail.com',
//     password: 'password12345',
//     typingScore: [
//       {
//         wordsPerMinute: 61,
//         accuracy: 80,
//         testDate: 11152023,
//       }
//     ]
//   });

//   console.log('users seeded');
// } catch(error) {
//   console.error('Error seeding data:', error);
// } finally {
//   process.exit();
// };
// };
