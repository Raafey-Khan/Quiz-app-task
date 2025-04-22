const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  name: String,
  score: Number,
  total: Number,
  topic: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Result', resultSchema);
