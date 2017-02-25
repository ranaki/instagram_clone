import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name:'', description:'', image:''}
  }

  handleFormChange(e) {
    switch(e.target.id) {
      case 'name':
        this.setState({name: e.target.value})
        break;
      case 'description':
        this.setState({description: e.target.value})
        break;
      case 'image':
        this.setState({image: e.target.value})
        break;
    }
  }

  submitPic(e) {
    e.preventDefault();
    this.props.add(this.state.name, this.state.description, this.state.image);
    
  }

  render() {
    return (
      <form
        onSubmit={(e) => this.submitPic(e)}
      >
        <input
          id="name"
          placeholder="Name"
          value={this.state.name}
          onChange={(e) => this.handleFormChange(e)}
          required

        />
        <input
          id="description"
          placeholder="Description"
          value={this.state.description}
          onChange={(e) => this.handleFormChange(e)}
          required
        />
        <input
          id="image"
          placeholder="Image"
          value={this.state.image}
          onChange={(e) => this.handleFormChange(e)}
          required
        />
        <button className="btn">Submit</button>
      </form>
    )
  }

}

export default Form;
