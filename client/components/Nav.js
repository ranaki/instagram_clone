import React from 'react';
import '../../public/stylesheets/style.css';

class Nav extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper white">
          <div className="container">
            <div className="row header-row">
              <div className="col m4 s12 insta-logo">
                <img id="logo-icon" src="https://stephencastleberry.files.wordpress.com/2016/05/instagram-logo-black.png?w=620" alt=""/>
                <img id="wordmark" src="http://vignette3.wikia.nocookie.net/logopedia/images/b/b7/Instagram_2016_wordmark.svg/revision/latest?cb=20160512092125" alt=""/>
                </div>
                <input className="col m4 hide-on-small-only" type="text" placeholder="search" />
                <div className="col m4 hide-on-small-only">
                  <i className="right fa fa-user-o" aria-hidden="true"></i>
                  <i className="right fa fa-heart-o" aria-hidden="true"></i>
                  <i className="right fa fa-compass" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }
  }

  export default Nav;
