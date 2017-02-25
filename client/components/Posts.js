import React from 'react';
import Post from "./Post";

class Posts extends React.Component {
    constructor(props){
      super(props);
      this.state = {posts: []}
    }

    componentDidMount() {
  $.ajax({
    url: '/posts',
    type: 'GET'
  }).done( posts => {
    this.setState({ posts });
  });
}

addPost = (name) => {
  $.ajax({
    url: '/posts',
    type: 'POST',
    data: { name }
  }).done( post => {
    this.setState({ boards: [...this.state.posts, post] });
  });
}

updatePost = (post) => {
  let { _id, name } = post;
  $.ajax({
    url: `/posts/${_id}`,
    type: 'PUT',
    data: { name }
  }).done( post => {
    let posts = this.state.posts.map( p => {
      if (p._id === _id)
        return post
      return p
    });

    this.setState({ posts });
    });
  }

  deletePost = (id) => {
    $.ajax({
      url: `/posts/${id}`,
      type: 'DELETE'
    }).done( () => {
      this.setState({ posts: this.state.posts.filter( p => p._id !== id ) });
    });
  }


    render(){
      let posts = this.state.posts.map(posts => {
        return(
          <Post key={post._id} deletePost={this.deletePost} updatePost={this.updatePost}/>
        )
      });
    }

export default Posts;
