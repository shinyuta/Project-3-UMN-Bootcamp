// C:\Users\majors\Documents\Bootcamp Repositories\Project-3-UMN-Bootcamp\server\config\connection.js

const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/typing-test'; 

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event handler for successful connection
mongoose.connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Event handler for connection errors
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

module.exports = mongoose.connection;


// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/typing-test');

// module.exports = mongoose.connection;
