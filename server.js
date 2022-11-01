'use strict';

//Requires

require('dotenv').config();



const express = require('express');
const cors = require('cors');
const Book = require('./models/book.js');
const mongoose = require('mongoose');
const { response } = require('express');


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

//JSON Parser Function
app.use(express.json());


const PORT = process.env.PORT || 3002;


//endpoints

app.get('/', (req, res) => {
  res.status(200).send('Server Up and Running.');
});

app.get('/books', getBooks);

//end point to add books
app.post('/books', postBooks);



async function getBooks(req, res, next) {
  try {
    let results = await Book.find();
    res.status(200).send(results);
  } catch (error) {
    next(error);
  }
}

async function postBooks(req, res, next) {
  try {
    console.log(req.body);
    let createdBook = await Book.create(req.body);
    response.status(200).send(createdBook)
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


