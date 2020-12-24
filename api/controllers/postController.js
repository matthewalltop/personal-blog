const express = require('express');
const postRouter = express.Router();
const Post = require('../models/post');

postRouter.route('/posts')
  .get((req, res) => {
    console.log('It is getting here');
    Post.find((err, posts) => {
      if (err) {
        return res.send(err);
      }
      return res.json(posts);
    })
  })
  .post((req, res) => {
    var mongoPost = new Post(req.body);
    mongoPost.save((err) => {
      if (err) {
        return res.send(err);
      };
      return res.json(mongoPost)
    });
  });

  module.exports = postRouter;