import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false }
    this.input;
  }

  render() {
    // let { deletePost, _id } = this.props;
    return (
      <div className="col s12 m4">
        <div className="card">
            <div className="card-image">
              <img src="https://images.unsplash.com/uploads/141219200475673afcb68/f5bd8360?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="></img>
              <span className="card-title">Surfer</span>
            </div>
            <div className="card-content">
              <p>Picture of a surfer.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="https://images.unsplash.com/uploads/141219324227007364f95/be0967a3?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="></img>
              <span className="card-title">Camera</span>
            </div>
            <div className="card-content">
              <p>Picture of a camera.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
      </div>
    )
  }
}

export default Post;