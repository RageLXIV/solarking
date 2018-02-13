import React, { Component } from 'react';
import logo from './img/logo.jpg';
import { Link } from 'react-scroll';
import Alert from 'react-s-alert';

class Navbar extends Component {
  handleClick1(e) {
        e.preventDefault();
        Alert.warning('Coming Soon!', {
            position: 'bottom-right',
            effect: 'slide',
            timeout: 'none'
        });
    }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand navbar-left"><Link className="navbar-brand navbar-left" to="top" spy={true} smooth={true} duration={500}>
              <img src={logo} alt="Solar King"/></Link></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link"><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                  About</Link></a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" onClick={this.handleClick1}>Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.handleClick1}>Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.handleClick1}>Testimonials</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.handleClick1}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
