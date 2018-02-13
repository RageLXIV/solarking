import React, { Component } from 'react';
//Classes
import Navbar from './Navbar';
import Header from './Header';
import Section1 from './Section1';
import Footer from './Footer';
//CSS Modules
import './css/bootstrap.css';
import './css/creative.css';
import './css/fontawesome-all.css';
import './css/magnific-popup.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
//Dependencies
import Alert from 'react-s-alert';
import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import Popper from 'popper.js';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Section1/>
        <Footer/>
        <span>
          {this.props.children}
        </span>
          <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

export default App;
