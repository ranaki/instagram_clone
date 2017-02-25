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
    }
  ]}
  }

    render() {
      // let posts = this.state.posts.map(posts => {
      //   return (
      //     <Post />
      //   )
      // });
      return (
        <div>
          <Post />
        </div>
      )
    }
}
export default Posts;
