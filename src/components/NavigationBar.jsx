import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export default class NavigationBar extends Component {
  render() {
    return (

      <nav className="Nav">
        <div className="Nav__container">

        <div className = "backback">
            <br></br><br></br><br></br><br></br>
            <h1 type="app-header">Welcome To Zach and Shawna's wedding!</h1>
        </div>
        <br></br><br></br><br></br><br></br>

          <div className="Nav__right">
            <ul className="Nav__item-wrapper" id="menu">
              <li className="Nav__item">
                <Link className="Nav__link" to="/">Home</Link>
              </li>
              &nbsp; &nbsp; &nbsp;
              <li className="Nav__item">
                <Link className="Nav__link" to="/Exhibits">Our Story</Link>
              </li>
              &nbsp; &nbsp; &nbsp;
              <li className="Nav__item">
                <Link className="Nav__link" to="/Exhibits">Travel</Link>
              </li>
              &nbsp; &nbsp; &nbsp;
              <li className="Nav__item">
                <Link className="Nav__link" to="/Exhibits">Wedding Party</Link>
              </li>
              &nbsp; &nbsp; &nbsp;
              <li className="Nav__item">
                <Link className="Nav__link" to="/Exhibits">Photos</Link>
              </li>
              &nbsp; &nbsp; &nbsp;
              <li className="Nav__item">
                <Link className="Nav__link" to="/Exhibits">Registry</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}