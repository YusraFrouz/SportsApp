const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;
const md5 = require('md5');

var userSchema = new Schema({
  fullname:  String,
  email: String,
  gender: String,
  birthDate: Date,  
  password: String
});

userSchema.plugin(autoIncrement, {inc_field: 'userId'});

var User = mongoose.model('User', userSchema);

module.export= User;


