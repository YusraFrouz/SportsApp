const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;
const md5 = require('md5');

var userSchema = new Schema({
  fullname:  String,
  gender: String,
  birthDate: Date,
  username: String,
  password: String
});

userSchema.plugin(AutoIncrement, {inc_field: 'userId'});

var User = mongoose.model('User', userSchema);

module.export= User;


