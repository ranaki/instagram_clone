import React from 'react';
import '../public/stylesheets/style.css';

class Nav extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper white">
          <div className="container">
              <a href="#!" className="brand-logo black-text"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i>Instagram</a>
              <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/" className="black-text btn blue-grey lighten-4">Post</a></li>
            </ul>
            <ul className="side-nav" id="mobile">
              <li><a href="/">Home</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
