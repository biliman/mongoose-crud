const customer = require('../models/customers_model');

function getAllCustomers(req, res, next) {
  customer.find({}, (err, docs) => {
    if (err) {
      res.send(err.message)
    }
    res.send(docs)
  })
}

function getOneCustomer(req, res, next) {
  customer.find({_id: req.params.id}, (err, docs) => {
    if (err) {
      res.send(err.message)
    }
    res.send(docs)
  })
}

function createCustomer(req, res, next) {
  customer.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }, function (err, docs) {
    if (err) {
      res.send(err.message)
    }
    res.send(docs)
  })
}

function deleteCustomer(req, res, next) {
  customer.remove({_id: req.params.id}, (err, docs) => {
    if (err) {
      res.send(err.message)
    }
    res.send(docs)
  })
}

function updateCustomer(req, res, next) {
  customer.update({_id: req.params.id}, 
    {
    $set: {
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }
  }, function(err, docs) {
    if (err) {
      res.send(err.message)
    }
    res.send(docs)
  })
}

module.exports = {getAllCustomers, getOneCustomer, createCustomer, deleteCustomer, updateCustomer}