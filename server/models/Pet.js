const mongoose = require("mongoose");

const { Schema } = mongoose;

const petSchema = new Schema({
  petName: String,
  petType: String,
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
