const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

  tittle: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Post', postSchema);

