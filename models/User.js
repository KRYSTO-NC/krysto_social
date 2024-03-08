const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },

  userType: {
    type: String,
    required: true,
    default: 'user',
    enum: ['user', 'Artisan/Producteur', 'Revendeur', 'Prestaire'],
  },

  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = User = mongoose.model('user', UserSchema)
