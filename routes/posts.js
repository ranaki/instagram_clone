const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find( ( err, posts ) => {
    res.json(posts);
  });
});
