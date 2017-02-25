import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  submitPic = (e) => {
    e.preventDefault();
    this.props.addPicture(this.refs.name.value, this.refs.description.value, this.refs.image.value);
    this.refs.form.reset();
    this.refs.name.focus();
  }

  render() {
    return (
      <form
        ref='form'
        onSubmit={this.submitPic}
      >
        <input
          autoFocus={true}
          id="name"
          placeholder="Name"
          ref='name'
          required
        />
        <input
          id="description"
          placeholder="Description"
          ref='description'
          required
        />
        <input
          id="image"
          placeholder="Image"
          ref='image'
          required
        />
        <input type='submit' className="btn" />
      </form>
    )
  }

}

export default Form;
