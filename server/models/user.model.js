const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name:  String,
  address: String
});

var User = mongoose.model('User', userSchema);

module.export= User;


