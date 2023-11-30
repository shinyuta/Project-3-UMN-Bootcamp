// C:\Users\majors\Documents\Bootcamp Repositories\Project-3-UMN-Bootcamp\server\config\cleanDB.js

const mongoose = require('mongoose');

const cleanDB = async (modelName, collectionName) => {
  try {
    // Wait for the connection to be fully established
    await mongoose.connection.once('open', () => {

    });    
    // Use the connection to access the 'db' object
    const db = mongoose.connection.db;

    // Retrieve a list of all collections
    const collections = await db.listCollections().toArray();

    // Iterate over each collection and drop it
    for (const collection of collections) {
      await db.dropCollection(collection.name);
    }

    console.log('Database cleaned successfully');
  } catch (error) {
    console.error('Error cleaning database:', error);
  }
};

module.exports = cleanDB;


// const models = require('../models');
// const db = require('../config/connection');

// module.exports = async (modelName, collectionName) => {
//   try {
//     let modelExists = await models[modelName].db.db.listCollections({
//       name: collectionName
//     }).toArray()

//     if (modelExists.length) {
//       await db.dropCollection(collectionName);
//     }
//   } catch (err) {
//     throw err;
//   }
// }
