const mongoose = require('mongoose');
const Comment = require('./comment');

const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const postModel = new Schema({
  title: { type: String, required: true },
  author: {type: ObjectId, required: true },
  body: { type: String },
  updated: {
    updatedBy: { type: String },
    updatedDate: { type: Date },
  },
  comments: {type: ObjectId, ref: Comment},
});

module.exports = mongoose.model('Post', postModel);