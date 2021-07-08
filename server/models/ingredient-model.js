
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ingredient = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    measure: { type: String, required: true },
    consomable: { type: String, required: true },
  },
)

module.exports.Ingredient = mongoose.model('ingredients', Ingredient)
