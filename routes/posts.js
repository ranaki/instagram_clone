const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find( ( err, posts ) => {
    res.send(posts);
  });
});

router.post('/', (req, res) => {
  new Post({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  }).save( (err, post) => {
    res.send(post);
  });
});

router.delete('/:id', (req, res) => {
  let postId = req.params.id;
  Post.findById(postId, (err, post) => {
    post.remove();
    res.status(200).send({success: true});
  });
});

module.exports = router
