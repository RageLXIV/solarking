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

                <li className="nav-item has-dropdown">
                  <a className="nav-link"><Link activeClass="active" to="products" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                  Products/Servies</Link></a>
                  <ul class="dropdown" style={{"cursor":"pointer"}}>
                    <li><Link activeClass="active" to="solar" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    Solar Systems</Link></li>
    								<li><Link activeClass="active" to="ac" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    AC Units & LED Lights</Link></li>
                  </ul>
                </li>
                <li className="nav-item has-dropdown">
                  <a className="nav-link"><Link activeClass="active" to="why" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                  Why Us</Link></a>
                  <ul class="dropdown" style={{"cursor":"pointer"}}>
                    <li><Link activeClass="active" to="add" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    Additional Information</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.handleClick1}>Testimonials</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                  Contact</Link></a>
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
