import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false }
    this.input;
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  showEdit = () => {
    let { name, updatePost, _id } = this.props;
    if (this.state.edit) {
      return (
        <form
          onSubmit={ e => {
            e.preventDefault()
            updatePost({ _id, name: this.input.value })
            this.input.value = null;
            this.toggleEdit()
          }}
        >
          <input defaultValue={name} ref={ (n) => this.input = n } />
        </form>
      )
    } else {
      return (<span className="card-title">{name}</span>)
    }
  }

  render() {
    let { deletePost, _id } = this.props;
    return (
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            { this.showEdit() }
          </div>
          <div className="card-action">
            <a onClick={this.toggleEdit}>
              { this.state.edit ? 'Cancel' : 'Edit' }
            </a>
            <a onClick={ () => deletePost(_id) }>Delete</a>
            <a href={`/posts/${_id}`}>Show</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;