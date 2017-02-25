import React from 'react';
import Post from "./Post";

class Posts extends React.Component {
    constructor(props){
      super(props);
      this.state = {posts: []}
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
