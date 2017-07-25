const express = require('express');
let router = express.Router();

const transactionsController = require('../controllers/transactions_controller')

router.get('/', transactionsController.getAllTransactions)
router.get('/:id', transactionsController.getOneTransaction)
router.get('/', transactionsController.createTransaction)
router.get('/:id', transactionsController.deleteTransaction)
router.get('/:id', transactionsController.updateTransaction)

module.exports = router