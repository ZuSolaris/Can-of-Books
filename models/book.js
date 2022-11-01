'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  wonAward: { type: Boolean, required: true },
  awards: {type: String, required: false}
});


const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
