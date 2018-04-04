import React, { Component } from 'react';
import { Element } from 'react-scroll'
import about from './img/about.jpg';

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
        <div className="section md-section bg-grey">


  				<div className="bg-img bg-half overlay" style={{backgroundImage: `url(${about})`}}></div>



  				<div className="container">


  					<div className="row">


  						<div className="offset-md-7 col-md-6">
  							<h2 className="title">About Us</h2>
  							<p className="lead">It is our goal to remain an industry leader by spreading the good news of sustainability, continuing our own education, and through communicating new ideas and fresh perspectives. The solar industry has made tremendous advances recently and we are excited to be at the center of the solar movement! We hope you join our solar community, and become one of our very satisfied customers.</p>
                <p>&#9679; <b><i>Our Vision</i></b> : To create new value, excite and delight our customers through the best solar products and services that the world offers.<br/><br/>
                &#9679; <b><i>Mission</i></b> : With passion, pride and speed, we actively communicate with our customers to deliver insightful automotive products and services that exceed their expectations.<br/><br/>
                &#9679; <b><i>Value</i></b> : We value integrity, customer focus, creativity, and efficient and nimble actions and respect highly motivated people and team spirit. We positively support environmental matters, safety and society.
                </p>

              </div>


  					</div>


  				</div>


  			</div>
        </Element>
      </div>
    );
  }
}

export default Section1;
