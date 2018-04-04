import React, { Component } from 'react';
import { Element } from 'react-scroll'
import ac1 from './img/ac1.jpg';
import ac2 from './img/ac2.jpg';
import led1 from './img/led1.jpg';
import led2 from './img/led2.jpg';
import OwlCarousel from 'react-owl-carousel'


class Products1 extends Component {
  constructor(props) {
        super(props);

        this.state = {
            options: {
                loop: true,
                margin:0,
                nav:false,
                autoplay:true,
                autoplayHoverPause:true,
                autoplayTimeout:6500,
                responsive:{
                  0:{
                      items:1
                  },
                  400:{
                      items:2
                  },
                  600:{
                      items:4
                  }
                }
            },

            items: [
                <div className="item" key={1}>
                  <div className="portfolio">
                    <div className="portfolio-img">
                      <div className="overlay"></div>
                      <div className="portfolio-links">
                        <a href="#0" data-toggle="modal" data-target="#ac1"><i className="fa fa-search"></i></a>
                      </div>
                      <img src={ac1} alt="Project 1"/>
                    </div>
                    <div class="portfolio-content">
                      <h3>Windy Air Conditioners</h3>
                      <span>9000BTU - 36000BTU</span>
                    </div>

                  </div>
                </div>,


                <div className="item" key={2}>
                  <div className="portfolio">
                    <div className="portfolio-img">
                      <div className="overlay"></div>
                      <div className="portfolio-links">
                        <a href="#0" data-toggle="modal" data-target="#ac2"><i className="fa fa-search"></i></a>
                      </div>
                      <img src={ac2} alt="Project 2"/>
                    </div>
                    <div class="portfolio-content">
                      <h3>Windy - AC Inverters</h3>
                      <span>12000BTU - 36000BTU</span>
                    </div>

                  </div>
                </div>,

                <div className="item" key={3}>
                  <div className="portfolio">
                    <div className="portfolio-img">
                      <div className="overlay"></div>
                      <div className="portfolio-links">
                        <a href="#0" data-toggle="modal" data-target="#led1"><i className="fa fa-search"></i></a>
                      </div>
                      <img src={led1} alt="Project 2"/>
                    </div>
                    <div class="portfolio-content">
                      <h3>LED Tubes & Bulbs</h3>

                    </div>

                  </div>
                </div>,

                <div className="item" key={4}>
                  <div className="portfolio">
                    <div className="portfolio-img">
                      <div className="overlay"></div>
                      <div className="portfolio-links">
                        <a href="#0" data-toggle="modal" data-target="#led2"><i className="fa fa-search"></i></a>
                      </div>
                      <img src={led2} alt="Project 2"/>
                    </div>
                    <div class="portfolio-content">
                      <h3>LED Street Lighting</h3>

                    </div>

                  </div>
                </div>,

            ],

        };
    }

  render() {
    return (


   <div className="bg-dark">
     <Element name="ac">
    <div className="section">
      <div className="container-fluid">
        <div className="row">
          <div className="text-center col-md-12"><br/>
            <h4 class="sub-title">Products & Services</h4>
            <p className="text-center"><h2 className="title white-text">Air Conditioners & LED Lights</h2></p>
          </div>
            <OwlCarousel className="owl-theme" ref={inst => this.slider = inst} {...this.state.options}>
              {this.state.items}
            </OwlCarousel>
        </div>


      </div>
    </div>
  </Element>
<div class="modal fade" id="ac1">
 <div class="modal-dialog modal-lg">
   <div class="modal-content">
   <div class="modal-body">
  <div className="row">
  <div class="col-md-5">
  <img src={ac1} style={{"width":"100%"}} alt="Product 1"/>
 </div>
    <div class="col-md-7">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
      </button>
  <h3 className="title">9000BTU - 36000BTU Windy AC Units</h3>
  No ductwork? No problem. Incredibly quiet, sleek and energy-efficient, ductless split systems are the smart way to cool rooms without ductwork—even those without windows or exterior walls. The entire line, including hard-to-find 115v wall-mounted models, utilizes Inverter Technology which allows systems to reach the desired temperature faster, maintain it more accurately, and reduce energy costs. SEER ratings up to 25.0.
  <h3>Contact us for details!</h3>
</div>
</div>

</div>
</div>
</div>
</div>

<div class="modal fade" id="ac2">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-body">
  <div className="row">
<div class="col-md-5">
  <img src={ac2} style={{"width":"100%"}} alt="Product 2"/>
</div>
<div class="col-md-7">
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
   <span aria-hidden="true">&times;</span>
  </button>
  <h3 className="title">12000BTU - 36000BTU Windy AC Inverters</h3>
  An inverter type air-conditioner adjusts the speed of the compressor to control the refrigerant (gas) flow rate, thereby consuming less current and power. An inverter has precise temperature control and as the set temperature is attained, the unit adjusts its capacity to eliminate any temperature fluctuations. In contrast, non-inverter airconditioners have a fixed cooling/ heating capacity and can only control the indoor temperature by starting or stopping their compressors.
  <h3>Contact us for more details!</h3>
</div>
</div>

</div>
</div>
</div>
</div>

<div class="modal fade" id="led1">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-body">
  <div className="row">
<div class="col-md-5">
  <img src={led1} style={{"width":"100%"}} alt="Product 2"/>
</div>
<div class="col-md-7">
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
   <span aria-hidden="true">&times;</span>
  </button>
  <h3 className="title">2 & 4 Feet LED Tubes / 3watt - 18watt bulbs</h3>
  LED lights are an exciting, and rapidly evolving, replacement for traditional fluorescent tube lights. Because of the efficiency and very long life of LED lighting systems, they offer dramatically reduced operating costs over the lifetime of a bulb.
  <h3>Contact us for more details!</h3>
</div>
</div>

</div>
</div>
</div>
</div>


<div class="modal fade" id="led2">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-body">
  <div className="row">
<div class="col-md-5">
  <img src={led2} style={{"width":"100%"}} alt="Product 2"/>
</div>
<div class="col-md-7">
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
   <span aria-hidden="true">&times;</span>
  </button>
  <h3 className="title">LED Street lighting</h3>
  The complexities of transportation infrastructure mean varying types of illumination are needed to ensure traffic flows smoothly, people feel safe, and cities save on costs. Smart LED street lighting is a cost-effective and sustainable choice for cities today – and into the future.
  <h3>Contact us for more details!</h3>
</div>
</div>

</div>
</div>
</div>
</div>
</div>

    );
  }
}

export default Products1;
