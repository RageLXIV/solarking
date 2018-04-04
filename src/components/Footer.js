import React, { Component } from 'react';
import logo from './img/logo.png';
import Alert from 'react-s-alert';

class Footer extends Component {
  handleClick1(e) {
        e.preventDefault();
        Alert.warning('Coming Soon!', {
            position: 'bottom-right',
            effect: 'slide',
            timeout: 'none'
        });
    }
    handleClick2(e) {
          e.preventDefault();
          Alert.info('solarkingja@gmail.com', {
              position: 'bottom-right',
              effect: 'slide',
              timeout: 'none'
          });
      }

  render() {
    return (

      <div>
<footer className="page-footer center-on-small-only blue-grey lighten-5 pt-0">

    <div className="bg-primary">
        <div className="container">

            <div className="row py-4 d-flex align-items-center">


                <div className="col-12 col-md-5 text-left mb-4 mb-md-0">
                    <h6 className="mb-0 text-white text-center text-md-left"><strong>Contact us through social media and email!</strong></h6>
                </div>

                <div className="col-12 col-md-7 text-center text-md-right d-block">

                    <a href="https://www.facebook.com/solarkingja" target="_blank" rel="noopener noreferrer" className="icons-sm fb-ic ml-0"><i className="fab fa-facebook text-white fa-2x col-lg-2 d-inline"> </i></a>
                    <a onClick={this.handleClick1} className="icons-sm gplus-ic"><i className="fab fa-instagram text-white fa-2x col-lg-2 d-inline"> </i></a>
                    <a onClick={this.handleClick2} className="icons-sm gplus-ic"><i className="far fa-envelope text-white fa-2x col-lg-2 d-inline"> </i></a>
                </div>
            </div>
        </div>
    </div>


    <div className="container mt-5 mb-4 text-center text-md-left">
        <div className="row mt-3">

            <div className="col-md-3 col-lg-3 col-xl-3 4b-r dark-grey-text footer-int">
                <h6 className="font-bold"><img className="img-responsive" src={logo} alt="Solar King"/></h6><hr/>

            </div>

            <div className="col-md-3 col-lg-2 col-xl-4 mx-auto mb-r dark-grey-text">
                <h6 className="title font-bold visible-md-block"><strong>Disclaimer</strong></h6>
                <p>This website is designed, developed and hosted by Solar King JA.
                   <a className="text-primary text-uppercase" data-toggle="modal" data-target="#disclaimer"><strong><br/>Read More</strong></a>
                 </p>
                 <div className="modal fade" id="disclaimer" tabindex="-1" role="dialog" aria-labelledby="disclaimer" aria-hidden="true">
                  <div className="modal-dialog modal-lg" role="document">
                   <div className="modal-content">

                     <div className="modal-body">
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button> <h5>Disclaimer</h5><hr/>
                    <p>Though all efforts have been made to ensure the accuracy of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. Solar King JA accepts no responsibility in relation to the accuracy, completeness, usefulness or otherwise of the contents. Users are advised to verify/check any information with the relevant Government department(s) and/or other source(s) and to obtain any appropriate professional advice before acting on the information provided in the website.<br/><br/>
                    In no event will the Solar King JA be liable for any expense, loss or damage including without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use of data, arising out of or in connection with the use of this website.<br/><br/>
                    Links to other websites that have been included on this website are provided for public convenience only. Solar King JA is not responsible for the contents or reliability of linked websites and does not necessarily endorse the view expressed within them. We cannot guarantee the availability of such linked pages at all times.<br/><br/>
                    Material featured on this website may be reproduced free of charge after taking proper permission by sending a mail to us. However, the permission to reproduce this material shall not extend to any material which is identified as being copyright of a third party. Authorization to reproduce such material must be obtained from the departments/copyright holders concerned.<br/><br/>
                    These terms and conditions shall be governed by and construed in accordance with the Jamaican Laws. Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Jamaica.
                    </p>
                    </div>
                    </div>
                  </div>
                  </div>
                </div>

            <div className="col-md-3 col-lg-4 col-xl-4">
                <h6 className="title font-bold"><strong>Contact</strong></h6>
                <p><i className="fa fa-home mr-3"></i><a className="text-dark" href="https://goo.gl/maps/wrDN6E7H7w92" target="_blank" rel="noopener noreferrer">81A Molynes Road Kingston 10</a></p>
                <p><i className="fab fa-whatsapp mr-3"></i><a>631-1247 | 631-1169 | 537-7752</a></p>
            </div>
          </div>
        </div>


    <div id="copy" className="footer-copyright text-center footer-end">
        <div className="container-fluid">
            © 2017 Copyright: <strong> Solar King JA </strong>
        </div>
    </div>


</footer>

      </div>
    );
  }
}

export default Footer;
