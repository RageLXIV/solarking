import React, { Component } from 'react';
//Classes
import Navbar from './Navbar';
import Header from './Header';
import Section1 from './Section1';
import Footer from './Footer';
import Products from './Products';
import Products1 from './Products1';
import Why from './Why';
import Contact from './Contact';
//CSS Modules
import './css/bootstrap.css';
import './css/creative.css';
import './css/style.css';
import './css/fontawesome-all.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';


//Dependencies
import Alert from 'react-s-alert';
// eslint-disable-next-line
import jQuery from 'jquery';
// eslint-disable-next-line
import bootstrap from 'bootstrap';
// eslint-disable-next-line
import Popper from 'popper.js';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Section1/>
        <Products/>
        <Products1/>
        <Why/>
        <Contact/>
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
