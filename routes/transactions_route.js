const express = require('express');
let router = express.Router();

const transactionsController = require('../controllers/transactions_controller')

router.get('/', transactionsController.getAllTransactions)
router.get('/:id', transactionsController.getOneTransaction)
router.post('/', transactionsController.createTransaction)
router.delete('/:id', transactionsController.deleteTransaction)
router.put('/:id', transactionsController.updateTransaction)

module.exports = router