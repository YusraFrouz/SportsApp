const mongoose = require('mongoose'),
  crypto = require('crypto'),
  jwt = require('jsonwebtoken'),
  AutoIncrement = require('mongoose-sequence'),
  Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  birthday: {
    type: Date
  },
  hash: String,
  salt: String
});

userSchema.plugin(AutoIncrement, { inc_field: 'userId' });

userSchema.methods.setPassword = (password) => {
  let salt = crypto.randomBytes(16).toString('hex');
  let hash = crypto.pbkdf2Sync(password, salt, 1000, 64).toString('hex');
  return {
    'salt': salt,
    'hash': hash
  };
};

userSchema.methods.checkPassword = (password, salt, hash) => {
  let newHash = crypto.pbkdf2Sync(password, salt, 1000, 64).toString('hex');

  return hash === newHash;
};

userSchema.methods.generateJwt = (id, fullname, email) => {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    userId: id,
    email: email,
    fullname: fullname,
    exp: parseInt(expiry.getTime() / 1000),
  }, "566B597033733676");
};

var User = mongoose.model('User', userSchema);
module.exports = User;





