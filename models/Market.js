const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MarketSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  from: {
    type: Date,
  },
  to: {
    type: Date,
  },

  current: {
    type: Boolean,
    default: false,
  },

  periodicity: {
    type: String,
    enum: ['hebdomadaire', 'mensuel', 'annuel'],
    default: 'annuel',
  },

  description: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Market = mongoose.model('market', MarketSchema)
