var mongoose = require('mongoose');
// console.log(mongoose);
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
// console.log(Schema);

var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock : Number
});

var Books = mongoose.model('books', bookSchema);

module.exports = Books