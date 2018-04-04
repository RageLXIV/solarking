import React, { Component } from 'react';
import { Element } from 'react-scroll'
import solar1 from './img/solar1.jpg';
import solar2 from './img/solar2.jpg';
import solar3 from './img/solar3.jpg';
import solar4 from './img/solar4.jpg';
import OwlCarousel from 'react-owl-carousel'


class Products extends Component {
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
                        <a href="#0" data-toggle="modal" data-target="#solar1"><i className="fa fa-search"></i></a>
                      </div>
                      <img src={solar1} alt="Project 1"/>
                    </div>
                    <div class="portfolio-content">
                      <h3>Perlight 265W</h3>
                      <span>Solar Panel</span>
                    </div>

                  </div>
                </div>,


                <div className="item" key={2}>
                  <div className="portfolio">
                    <div className="portfolio-img">
                      <div className="overlay"></div>
                      <div className="portfolio-links">
                        <a href="#0" data-toggle="modal" data-target="#solar2"><i className="fa fa-search"></i></a>
                      </div>
                      <img src={solar2} alt="Project 2"/>
                    </div>
                    <div class="portfolio-content">
                      <h3>Schneider-Electric SW4024</h3>
                      <span>Solar Inverter</span>
                    </div>

                  </div>
                </div>,
                <div className="item" key={3}>
                  <div className="portfolio">
                    <div className="portfolio-img">
                      <div className="overlay"></div>
                      <div className="portfolio-links">
                        <a href="#0" data-toggle="modal" data-target="#solar3"><i className="fa fa-search"></i></a>
                      </div>
                      <img src={solar3} alt="Project 3"/>
                    </div>
                    <div class="portfolio-content">
                      <h3>Crown 6V 430AH</h3>
                      <span>Deep Cycle Batteries</span>
                    </div>

                  </div>
                </div>,


                <div className="item" key={4}>
                  <div className="portfolio">
                    <div className="portfolio-img">
                      <div className="overlay"></div>
                      <div className="portfolio-links">
                        <a href="#0" data-toggle="modal" data-target="#solar4"><i className="fa fa-search"></i></a>
                      </div>
                      <img src={solar4} alt="Project 4"/>
                    </div>
                    <div class="portfolio-content">
                      <h3>Context</h3>
                      <span>Solar Charge Controller</span>
                    </div>

                  </div>
                </div>,
            ],

        };
    }

  render() {
    return (
      <div className="bg-dark">
      <Element name="products">

        <div id="numbers" className="section sm-section bg-main">

    			<div className="container">

    				<div className="row">

    					<div className="col-xs-6 col-md-3">
    						<div className="number">
    							<i className="fas fa-tint"></i>
    							<h2>Solar Water Heaters</h2>
    							<span>Flat Panel Systems & Evacuated Tube Systems</span>
    						</div>
    					</div>

    					<div className="col-xs-6 col-md-3">
    						<div className="number">
    							<i className="fas fa-sun"></i>
    							<h2>Solar Powered Systems</h2>
    							<span>Solar Panels, Inverters, Batteries & Charge Controllers</span>
    						</div>
    					</div>

    					<div className="col-xs-6 col-md-3">
    						<div className="number">
    							<i className="fas fa-leaf"></i>
    							<h2>Air Conditioners</h2>
    							<span>Inverters & Regular Units</span>
    						</div>
    					</div>

    					<div className="col-xs-6 col-md-3">
    						<div className="number">
    							<i className="fas fa-lightbulb"></i>
    							<h2>LED Lightings & Electrical Installations</h2>
    							<span>LED Tubes & Street Lighting Fixtures </span>
    						</div>
    					</div>

    				</div>

    			</div>

      </div>
      </Element>
      <Element name="solar">
    <div className="section">
      <div className="container-fluid">

        <div className="row">

          <div className="text-center col-md-12">
            <br/>
            <h4 class="sub-title">Products & Services</h4>
            <p className="text-center"><h2 className="title white-text">Solar Powered Systems</h2></p>
          </div>


            <OwlCarousel className="owl-theme" ref={inst => this.slider = inst} {...this.state.options}>
              {this.state.items}
            </OwlCarousel>


        </div>

      </div>
    </div>
  </Element>
<div class="modal fade" id="solar1">
 <div class="modal-dialog modal-lg">
   <div class="modal-content">
   <div class="modal-body">
  <div className="row">
  <div class="col-md-5">
  <img src={solar1} style={{"width":"100%"}} alt="Product 1"/>
 </div>
    <div class="col-md-7">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
      </button>
  <h3 className="title">Perlight 265W Solar Panel</h3>
  <p>The Perlight Solar modules use the state-of-the-art technology in the design & manufacturing process, thus ensure the superior quality as well as the modern appearance.</p>
  <ul>
    <li>Maximum Power (Pmax) : 265W</li>
    <li>Voltage at Maximum Power (Vmpp) (Pmax) : 31.22V</li>
    <li>Panel Efficiency : 16.29%</li>
    <li>Power Tolerance (Positive) : +3%</li>
  </ul>
  <h2 class="cost"><i class="fas fa-dollar-sign"></i>18,500</h2>
</div>
</div>

</div>
</div>
</div>
</div>

<div class="modal fade" id="solar2">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-body">
  <div className="row">
<div class="col-md-5">
  <img src={solar2} style={{"width":"100%"}} alt="Product 2"/>
</div>
<div class="col-md-7">
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
   <span aria-hidden="true">&times;</span>
  </button>
  <h3 className="title">Schneider-Electric SW4024 Solar Hybrid Inverter System</h3>
This off-grid or battery backup inverter will deliver 3,400 watts of pure sinewave power at 120/240Vac making it great for homes or cabins. Schneider’s line of SW inverters have built-in chargers to keep your battery bank charged from a generator or other AC power source. The SW line of inverters are a great value, with an impressive list of features and sell for hundreds less than the competition.

  <h2 class="cost"><i class="fas fa-dollar-sign"></i>175,000.00</h2>
</div>
</div>

</div>
</div>
</div>
</div>


<div class="modal fade" id="solar3">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-body">
  <div className="row">
<div class="col-md-5">
  <img src={solar3} style={{"width":"100%"}} alt="Product 3"/>
</div>
<div class="col-md-7">
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
   <span aria-hidden="true">&times;</span>
  </button>
  <h3 className="title">Crown 6v 430AH Deep Cycle Battery</h3>
  Three (3) Cell Deep Cycle Battery made by CROWN USA. Mainly used on golf carts. Suitable for any deep cycle application including marine, industrial, renewable energy solar and wind.<br/>
  Crown deep cycle performance starts with plates that are built to deliver power when it's needed. Crown deep cycle batteries utilize the heaviest and thickest plates available from the battery industry - and more than 10% thicker than those used by the competition. Increased plate thickness delivers longer battery discharge performance and cycle life.

  <h2 class="cost"><i class="fas fa-dollar-sign"></i>47,500.00</h2>
</div>
</div>

</div>
</div>
</div>
</div>


<div class="modal fade" id="solar4">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-body">
  <div className="row">
<div class="col-md-5">
  <img src={solar4} style={{"width":"100%"}} alt="Product 4"/>
</div>
<div class="col-md-7">
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
   <span aria-hidden="true">&times;</span>
  </button>
  <h3 className="title">Conext MPPT 60 150 PV Solar Charge Controller</h3>
  The ConextTM MPPT 60 150 is a photovoltaic (PV) charge controller that tracks the maximum power point of a PV array to deliver the maximum available current for charging batteries. When charging, the MPPT 60 150 regulates battery voltage and output current based on the amount of energy available from the PV array and state-of-charge of the battery.
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

export default Products;
