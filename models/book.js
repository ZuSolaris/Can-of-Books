'use strict';

const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  won_award: { type: boolean, required: true },
  awards: {type: string, required: false}
});


const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
