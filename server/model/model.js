const mongoose = require("mongoose");

// schema allow to define shape and content of the document
var schema = new mongoose.Schema({
  dish: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  availability: {
    type: String,
    required: true
  }
});

const Dishdb = mongoose.model("dishdb", schema);

module.exports = Dishdb;
