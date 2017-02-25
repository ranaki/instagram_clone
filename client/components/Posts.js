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

    render() {
      let posts = this.state.posts.map(post => {
        return (
          <Post
            key={post._id}
           {...post}
          />
        )
      });
      return (
        <div>
          <Form addPicture={this.addPicture} placeholder="Add a picture" />
          {posts}
        </div>
      )
    }
}
export default Posts;
