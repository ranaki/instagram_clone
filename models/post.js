const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  name: { type: String, required: true },
  description: {type: String, required: true},
  image: {type: String, requred: true}
});

module.exports = mongoose.model( 'Post', Post );
