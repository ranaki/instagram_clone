import React from 'react';
import Nav from '../components/Nav';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default App;
