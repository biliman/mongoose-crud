var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
});

var Customers = mongoose.model('customers', customerSchema);

module.exports = Customers