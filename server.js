'use strict';

//Requires

require('dotenv').config();

const { response } = require('express');
const express = require('express');
const nodemon = require('nodemon');
const cors = require = require('cors');

const mongoose = require('mongoose');

//use apps 

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;


//endpoints

app.get('/', (req, res) => {
  response.status(200).send('Server Up and Running.');
});

app.get('*', (req, res) => {
  response.status(404).send('Resource Not Available.');
});

//Error Handling

app.use((error, req, res, next) => {
  response.status(500).send(error.message);
});

//listeners
app.listen(PORT, () => console.log(`Up and Running on Port ${PORT}`));


