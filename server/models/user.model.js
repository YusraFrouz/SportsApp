const mongoose = require('mongoose'),
  crypto = require('crypto'),
  jwt = require('jsonwebtoken'),
  userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    hash: String,
    salt: String
  });

userSchema.methods.setPassword = (password) => {
  let salt = crypto.randomBytes(16).toString('hex');
  let hash = crypto.pbkdf2Sync(password,salt, 1000, 64).toString('hex');
  return {
    'salt':salt,
    'hash':hash
  };
};

userSchema.methods.checkPassword = (password,salt,hash) => {
  let newHash = crypto.pbkdf2Sync(password,salt, 1000, 64).toString('hex');

  return hash === newHash;
};

userSchema.methods.generateJwt = () => {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime()/1000),
  }, "Yuzzi is awesome"); //remember to remove this from code
};

mongoose.model('User',userSchema); 



