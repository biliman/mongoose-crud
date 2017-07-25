const book = require('../models/books_model');

function getAllBooks(req, res, next) {
  book.find({}, (err, docs) => {
    if (err) {
      res.send(err.message);
    }
    res.send(docs);
  });
}

function getOneBook(req, res, next) {
  book.find({_id: req.params.id}, (err, docs) => {
    if (err) {
      res.send(err.message)
    }
    res.send(docs)
  })
}

function createBook(req, res, next) {
  book.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, function (err, docs) {
    if (err) {
      res.send(err.message)
    }
    res.send(docs)
  })
}

function deleteBook(req, res, next) {
  book.remove({_id: req.params.id}, (err, docs) => {
    if (err) {
      res.send(err.message)
    }
    res.send(docs)
  })
}

function updateBook(req, res, next) {
  book.find({_id: req.params.id}, (err, docs) => {
    if (err) {
      res.send(err.message)
    }
    book.update({_id: docs[0]._id},{
      $set: {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: Number(req.body.stock)
      }
    }, function(err, docs) {
      if (err) {
        res.send(err.message)
      }
      res.send(docs)
    })
  })
}

module.exports = {getAllBooks, getOneBook, createBook, deleteBook, updateBook}