const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },

  githubId: String,
  credits: { type: Number, default: 0 },

//  twitterId: String,
//  credits: { type: Number, default: 0 },

  linkedinId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
