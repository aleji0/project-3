const mongoose = require('mongoose');

const { Schema } = mongoose;

const petSchema = new Schema({
    petName: String
    ,
    petType: String,
  });
  
  module.exports = petSchema ;