'use strict';

//Requires

require('dotenv').config();



const express = require('express');
const nodemon = require('nodemon');
const cors = require('cors');
const Book = require('./models/book.js');
const mongoose = require('mongoose');


//connection to db
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
console.log('Mongoose Connected!');
});

//use apps 

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3002;


//endpoints

app.get('/', (req, res) => {
  res.status(200).send('Server Up and Running.');
});

app.get('/books', getBooks);
  async function getBooks(req, res, next){
    try {
      let results = await Book.find();
      res.status(200).send(results);
    } catch (error) {
      next(error);
    }
  }

app.get('*', (req, res) => {
  res.status(404).send('Resource Not Available.');
});

//Error Handling

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

//listeners
app.listen(PORT, () => console.log(`Up and Running on Port ${PORT}`));


