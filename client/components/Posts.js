import React from 'react';
import Post from "./Post";

class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state = {posts: [
      {
      name: "Surfer",
      description:"Picture of a surfer",
      image: "https://images.unsplash.com/uploads/141219200475673afcb68/f5bd8360?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
    },
    {
      name: "Camera",
      description:"Picture of a camera",
      image: "https://images.unsplash.com/uploads/141219324227007364f95/be0967a3?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
    }
  ]}
  }

    render() {
      let posts = this.state.posts.map(posts => {
        return (
          <Post
           {...posts}
          />
        )
      });
      return (
        <div>
          {posts}
        </div>
      )
    }
}
export default Posts;
