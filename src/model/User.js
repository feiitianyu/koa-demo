const mongoose = require('mongoose');

const useSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', useSchema);
