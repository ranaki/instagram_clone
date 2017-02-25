import React from 'react';
import Nav from '../components/Nav';
import Posts from '../components/Posts';
import Form from '../components/Form';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col m6 offset-m3">
              <Form />
            </div>
            <Posts />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
