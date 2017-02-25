import React from 'react';
import Nav from '../components/Nav';
import Posts from '../components/Posts';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;
