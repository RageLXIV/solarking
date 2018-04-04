import React, { Component } from 'react';
import { Element } from 'react-scroll';

class Contact extends Component {
  render() {
    return (
      <Element name="contact">
      <div className="text-center">
        <div class="top-content bg-main">
            <div class="inner-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 form-box">
                        	<div class="form-top">
                        		<div class="form-top-left">
                        			<h3>Contact us</h3>
                            		<p>Fill in the form below to send us a message:</p>
                        		</div>
                        		<div class="form-top-right">
                        			<i class="fa fa-envelope"></i>
                        		</div>
                            </div>
                            <div class="form-bottom contact-form">
			                    <form  action="mailto:solarkingja@gmail.com" method="post" enctype="text/plain">
			                    	<div class="form-group">
			                    		<label class="sr-only" for="contact-email">Email</label>
			                        	<input type="text" name="email" placeholder="Email..." class="contact-email form-control" id="contact-email"/>
			                        </div>
			                        <div class="form-group">
			                        	<label class="sr-only" for="contact-subject">Subject</label>
			                        	<input type="text" name="subject" placeholder="Subject..." class="contact-subject form-control" id="contact-subject"/>
			                        </div>
			                        <div class="form-group">
			                        	<label class="sr-only" for="contact-message">Message</label>
			                        	<textarea name="message" placeholder="Message..." class="contact-message form-control" id="contact-message"></textarea>
			                        </div>
			                        <button type="submit" class="btn">Submit <i class="fas fa-chevron-right"></i></button>
			                    </form>
		                    </div>
                        </div>
                        <iframe className="form-box" title="Contact" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15175.90581027319!2d-76.8224016!3d18.0262964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1ef786d6b151d2!2sSolar+King+JA!5e0!3m2!1sen!2sjm!4v1522862039686" frameborder="0" style={{"width":"540px","padding":"40px 0px 0px 40px","border-radius":"4px 4px 4px 10px"}} allowfullscreen></iframe>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </Element>
    );
  }
}

export default Contact;
