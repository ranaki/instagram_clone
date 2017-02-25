const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find( ( err, posts ) => {
    res.json(posts);
  });
});

router.post('/', (req, res) => {
  new Post({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  }).save( (err, post) => {
    res.json(post);
  });
});

module.exports = router
