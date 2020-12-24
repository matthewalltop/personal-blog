const mongoose = require('mongoose');

const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const commentModel = new Schema({
  author: {type: ObjectId, required: true },
  body: { type: String },
  updated: {
    updatedBy: { type: String },
    updatedDate: { type: Date },
  },
});

module.exports = mongoose.model('Comment', commentModel);