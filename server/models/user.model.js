var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:  String,
  address: String
});

var User = mongoose.model('User', userSchema);

module.export= User;


