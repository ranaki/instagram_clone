import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false }
  }

  render() {
    // let { deletePost, _id } = this.props;
    return (
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <h3 className="card-title">{this.props.name} <i className="right fa fa-ellipsis-h" aria-hidden="true"></i></h3>

            <div className="card-image">
              <img src={this.props.image}></img>
            </div>
            <div className="card-content">
              <div className="icons">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <i className="fa fa-comment-o" aria-hidden="true"></i>
                <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                <i className="fa fa-trash-o right" aria-hidden="true" onClick={() => this.props.deletePost(this.props._id)}></i>
              </div>
              <p>{this.props.description}</p>
            </div>
          </div>
      </div>
    )
  }
}

export default Post;
