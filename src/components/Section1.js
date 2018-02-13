import React, { Component } from 'react';
import { Element } from 'react-scroll'

class Section1 extends Component {
  render() {
    return (
      <div>
        <Element name="about">
        <section className="bg-primary align-middle section-int" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 mx-auto text-justify center-block">
                <br/>
                <span className="text-faded mb-4 text-middle"><b><span className="text-white"><i className="fas fa-check-circle"></i>&nbsp;Solar King JA</span></b>, Your Finest Choice for Home and Office energy saving solutions! <b><span className="text-warning">Contact us now!</span></b></span>
                <br/>
                <br/>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">At Your Service!</h2>
                <hr className="my-4"/>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="far fa-4x fa-sun text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">Solar Electrical Systems</h3>
                  <p className="text-muted mb-0">Whether you are looking for a small solar electrical system to supplement your home electricity usage or you’re looking to power a large commercial property, there is a solar system that will fit your needs. Solar power is clean, renewable, and very available, making it a relatively inexpensive and attractive choice for consumers worldwide.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-leaf text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">Air<br/>Conditioning</h3>
                  <p className="text-muted mb-0">Air conditioners remove heat from your home or workspace, leaving you cool and comfortable even on the hottest summer afternoons.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="far fa-4x fa-lightbulb text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">LED Light Bulbs</h3>
                  <p className="text-muted mb-0">If you're looking for a cost-effective, energy-saving alternative to traditional incandescent bulbs, LED lights are the right choice. These bulbs operate on just a fraction of the energy as incandescent and CFL bulbs and provide a much longer lifespan.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fas fa-4x fa-tint text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">Solar Water Heaters</h3>
                  <p className="text-muted mb-0">Solar water heaters use renewable thermal energy produced by the sun to warm water for your shower, washing machine, dishwasher etc. Better yet, it does it at a fraction of the price of a conventional storage tank water heater!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </Element>
      </div>
    );
  }
}

export default Section1;
