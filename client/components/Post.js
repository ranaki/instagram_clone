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
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <h3 className="card-title">{this.refs.name}</h3>
            <div className="card-image">
              <img src={this.props.image}></img>
            </div>
            <div className="card-content">
              <i class="fa fa-heart-o" aria-hidden="true"></i>
              <p>{this.props.description}</p>
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
