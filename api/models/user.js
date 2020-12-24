const mongoose = require('mongoose'),
      crypto = require('crypto');

const {
  Schema
} = mongoose;


let generateSalt = () => {
  return crypto.randomBytes(128).toString('base64');
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function (password, salt) {
  var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest('hex');
  return {
    salt: salt,
    passwordHash: value
  };
};

const userModel = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true
  },
  emailAddress: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    set: generateSalt
  },
  updated: {
    updatedBy: {
      type: String
    },
    updatedDate: {
      type: Date
    },
  },
});

userModel.pre('save', function (next) {
  var user = this;

  if(!user.isModified('password')) return next();
  // Hash and Salt password
  user.salt = generateSalt();
  user.password = sha512(this.password, this.salt).passwordHash;
  next();
});

module.exports = mongoose.model('User', userModel);