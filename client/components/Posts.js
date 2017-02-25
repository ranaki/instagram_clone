import React from 'react';
import Post from "./Post";
import Form from "./Form";

class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/posts',
      dataType: 'JSON'
    }).done( posts => {
      this.setState({ posts });
    }).fail( data => {
      console.log(data);
    });
  }

  addPicture = (name, description, image) => {
    $.ajax({
      url: '/posts',
      type: 'POST',
      data: { name, description, image }
    }).done( post => {
      this.setState({ posts: [...this.state.posts, post] });
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

    render() {
      let posts = this.state.posts.map(post => {
        return (
          <Post
            deletePost={this.deletePost}
            key={post._id}
           {...post}
          />
        )
      });
      return (
        <div>
          <div className="post-form col s12 m6 offset-m3"><Form addPicture={this.addPicture} placeholder="Add a picture" /></div>
          {posts}
        </div>
      )
    }
}
export default Posts;
