const express = require('express');
let app = express();

// BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// MONGOOSE
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library2')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function() {
  console.log("=== We are Connected to mongoose Brooo ===");
})

// BOOKS
const book = require('./routes/books_route')
app.use('/books', book)

// TRANSACTIONS
const transaction = require('./routes/transactions_route')
app.use('/transactions', transaction)

// CUSTOMERS
const customer = require('./routes/customers_route')
app.use('/customers', customer)


app.listen(3000);