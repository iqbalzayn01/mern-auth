// const mongoose = require('mongoose');
// const { urlDb } = require('../config');

// mongoose
//   .connect(urlDb)
//   .then(() => console.log('MongoDB Connected'))
//   .catch((error) => console.log(error));

// const db = mongoose.connection;

// module.exports = db;

const mongoose = require('mongoose');
const { urlDb } = require('../config');

mongoose
  .connect(urlDb)
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => console.log('MongoDB Connection Error:', error));

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

module.exports = db;
