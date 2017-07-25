const express = require('express');
let router = express.Router();

const booksController = require('../controllers/books_controller');

router.get('/', booksController.getAllBooks)
router.get('/:id', booksController.getOneBook)
router.post('/', booksController.createBook)
router.delete('/:id', booksController.deleteBook)
router.put('/:id', booksController.updateBook)

module.exports = router