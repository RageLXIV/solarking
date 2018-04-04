import React, { Component } from 'react';
import { Link , Element } from 'react-scroll';

class Header extends Component {
  render() {
    return (
      <div>
        <Element name="top">
        <header className="masthead text-white d-flex">
          <div className="container my-auto">
            <div className="row">
                <div className="col-lg-11 mx-auto">
                <h1 className="text-uppercase white-text">
                  <b>Experience The Power of The Sun at its Finest!</b><br/>
                </h1>
                <hr/>
              </div>
              <div className="col-lg-11 mx-auto">
                <p className="mb-5">Our experienced staff assist clients to help reduce their operating costs. Our energy saving solutions will help you maximize your power consumption efficiencies and decrease the cost of the power you consume.</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger"><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                  Find Out More</Link></a>
              </div>
            </div>
          </div>
        </header>
        </Element>
      </div>
    );
  }
}

export default Header;
