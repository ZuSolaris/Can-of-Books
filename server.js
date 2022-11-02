'use strict';

//Requires

require('dotenv').config();



const express = require('express');
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

//JSON Parser Function
app.use(express.json());


const PORT = process.env.PORT || 3002;


//endpoints

app.get('/', (req, res) => {
  res.status(200).send('Server Up and Running.');
});

app.put('/books/:bookID', updateBook);



app.get('/books', getBooks);

//end point to add books
app.post('/books', postBooks);

//  ENDPOINT TO DELETE BOOKS. 
app.delete('/books/:bookID', deleteBooks);
async function updateBook(req, res, next) {
  try {
    console.log(req.params);
    let id = req.params.bookID;
    let data = req.body;
console.log(data, id);
    const updatedBook = await Book.findByIdAndUpdate(id, data, {new: true, overwrite: true});

    res.status(200).send(updatedBook);
  }
  catch (error) {
    next(error);
  }
}

async function deleteBooks(req, res, next) {
  console.log(req.params.catID)
  try {
    let id = req.params.bookID
    await Book.findByIdAndDelete(id);
    res.status(200).send('book was deleted');
  } catch (error) {
    next(error);
  }
}

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
    res.status(200).send(createdBook);
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


