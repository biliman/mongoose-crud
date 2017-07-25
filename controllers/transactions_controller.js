const transaction = require('../models/transactions_model')

function getAllTransactions(req, res, next) {
  transaction.find({}, (err, docs) => {
    if (err) {
      res.send(err.message)
    }
    res.send(docs);
  })
}

function getOneTransaction(req, res, next) {
  transaction.find({_id: req.params.id}, (err, docs) => {
    if (err) {
      res.send(err.message)
    }
    res.send(docs)
  })
}

function createTransaction(req, res, next) {
  let due = new Date()
  due.setDate(due.getDate() + parseInt(req.body.days))
  
  transaction.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: new Date(),
    due_date: due,
    // in_date: diisi saat buku dikembalikan (saat update transaction)
    // fine: diisi saat buku dikembalikan (saat update transaction)
    booklist: req.body.booklist
  }, function(err, docs) {
    if (err) {
      res.send(err.message)
    }
    res.send(docs)
  })
}

function deleteTransaction(req, res, next) {
  transaction.remove({_id: req.params.id}, (err, docs) => {
    if (err) {
      res.send(err.message)
    }
    res.send(docs)
  })
}

function updateTransaction(req, res, next) {
  let id = req.params.id
  transaction.findById(id, (err, docs) => {
    if (err) {
      res.send(err.message)
    }
    docs.in_date = new Date();
    
    if (docs.in_date > docs.due_date) {
      let late = Math.round((docs.in_date - docs.due_date) / (1000*24*3600))
      let bookCount = docs.booklist.length * 500;
      docs.fine = late * bookCount
    } else {
      docs.fine = 0
    }
    
    docs.save(function(err){
      if (err) {
        res.send(err.message)
      }
      res.send(docs)
    })
    
  })
}

module.exports = {getAllTransactions, getOneTransaction, createTransaction, deleteTransaction, updateTransaction}