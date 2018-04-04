import React, { Component } from 'react';
import { Element } from 'react-scroll';
import why from './img/why.jpg';
import blog2 from './img/blog2.jpg';
import blog1 from './img/blog1.jpg';
import blog3 from './img/blog3.jpg';
import blog4 from './img/blog4.jpg';

class Why extends Component {
  render() {
    return (
      <div>
        <Element name="why">
        <div class="section md-section bg-grey">

          <div class="bg-img bg-half bg-right overlay" style={{backgroundImage: `url(${why})`}}></div>

          <div class="container">

            <div class="row">

              <div class="col-md-5">

                <div class="section">
                  <h4 class="sub-title">Subtitle</h4>
                  <h2 class="title">Why Choose Us</h2>
                  <p className="lead">At Solar King, our vision is to be the best company in the world-- in the eyes of our customers, shareholders, communities and people. We expect and demand the best we have to offer by always keeping Solar King&#39;s values top of mind.</p>
<p>&#9679; <i>Our competent and trained staff will give you the knowledge you need to make an informed decision.</i><br/><br/>
&#9679; <i>We offer a variety of solutions to meet your energy saving needs.</i><br/><br/>
&#9679; <i>We provide excellent customer services.</i></p>
</div>

              </div>

            </div>

          </div>

        </div>
    </Element>

    <div className="bg-main" style={{"height":"4px"}}></div>

<Element name="add">
    <div className="bg-grey" style={{"padding-top":"22px"}}>
    <div class="blog-card">
 <div class="photo photo1"></div>
 <ul class="details">
   <li>Solar King Article</li>
   <li><a>Electicity Tips</a></li>
   <li></li>
 </ul>
 <div class="description">
     <h1>How To Lower Electric Bill</h1>
     <h2>Go Solar!</h2>
     <p class="summary">Sure, you have to pay for those solar panels, but they are cheaper (in the long run) than electricity. The
average household that goes solar is likely to save all that they have spend pulse thousands of dollars more
over the course of having a solar system’s in their lifetime.
</p>
     <a data-toggle="modal" data-target="#blog1" style={{"cursor":"pointer"}}>Read More</a>
 </div>
</div>
<div class="blog-card alt">
 <div class="photo photo2"></div>
 <ul class="details">
   <li>Supplementary Information</li>
   <li><a>Air-Conditioning Warranty</a></li>
 </ul>
 <div class="description">
     <h1>Air-Conditioning Warranty</h1>
     <h2>Warranty Coverage on Air-Conditioning</h2>
     <p class="summary">&#9679; Your Air-Conditioning Unit Compressor carries three (3) years residential two (2) years commercial
warranty (restricted to a one time replacement only).<br/>
&#9679; Warranty covers only defects in workmanship material and mechanical defects in compressors.</p>
     <a data-toggle="modal" data-target="#blog2" style={{"cursor":"pointer"}}>Read More</a>
 </div>
</div>

<div class="blog-card">
<div class="photo photo3"></div>
<ul class="details">
  <li>Supplementary Information </li>
  <li><a>Grid Tie System Warranty</a></li>
</ul>
<div class="description">
 <h1>Grid Tie System Warranty</h1>
 <h2>Warranty Coverage on Solar Power System</h2>
 <p class="summary"><ul>Your system carries a warranty of:<br/>
<li>Ten (10) years on the panels , Four (4) years on the inverter, Two (2) years on the charge controller (if applicable), One (1) year on the batteries (if applicable) & Six (6) months on miscellaneous materials and equipments</li></ul></p>
 <a data-toggle="modal" data-target="#blog3" style={{"cursor":"pointer"}}>Read More</a>
</div>
</div>

<div class="blog-card alt">
 <div class="photo photo4"></div>
 <ul class="details">
     <li>Solar King Article</li>
     <li><a>Solar Water Heaters</a></li>
 </ul>
 <div class="description">
     <h1>Solar Water Heaters</h1>
     <h2>How do solar water heating systems work?</h2>
     <p class="summary">Solar water heating systems use solar panels called collectors, fitted to your roof.
These collect heat from the sun and use it to heat up water which is stored in a hot
water cylinder (tank).</p>
     <a data-toggle="modal" data-target="#blog4" style={{"cursor":"pointer"}}>Read More</a>
 </div>
</div>
</div>
</Element>
<div className="modal fade" id="blog2" tabindex="-1" role="dialog" aria-labelledby="disclaimer" aria-hidden="true">
 <div className="modal-dialog modal-lg" role="document">
  <div className="modal-content">

    <div className="modal-body img-responsive">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button><h2>Air-Conditioning Warranty</h2><hr/>
     <img src={blog1} className="img-responsive" alt="blog 2" style={{"width":"100%"}}/>
     <h4 className="text-center">Warranty Coverage on Air-Conditioning</h4>
   <p className="small">&#9679; Your Air-Conditioning Unit Compressor carries three (3) years residential two (2) years commercial
warranty (restricted to a one time replacement only).<br/><br/>
&#9679; Warranty covers only defects in workmanship material and mechanical defects in compressors.</p>
<h4 className="text-center">Exclusion Clause</h4>
<p className="small">&#9679; Improper maintenance- (Units must be serviced by Solar King at least every six (5-6) months
residential/ four (3-4) months commercial).<br/><br/>
&#9679; Interference with the unit by unauthorized person.<br/><br/>
&#9679; Damages resulting from use of equipment in a corrosive environment.<br/><br/>
&#9679; Damages resulting from accident, fire, flood, or acts of God.<br/><br/>
&#9679; Damages resulting from electrical malfunction terminal blow and burnt compressor.<br/><br/>
&#9679; Where six (6) months have elapsed and there is claim for warranty a labor charge shall be
applicable for replacement of parts.<br/><br/>
&#9679; Subject to item (1), where twenty four (24) months have elapsed since the installation of the Air
Conditioner, the value of the replacement compressor shall be prorated in equal increments and
the remaining balance shall be the entitlement of the holder.</p>
   </div>
   </div>
 </div>
 </div>

 <div className="modal fade" id="blog1" tabindex="-1" role="dialog" aria-labelledby="disclaimer" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
   <div className="modal-content">

     <div className="modal-body img-responsive">
       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button><h2>How To Lower Electric Bill</h2><hr/>
      <img src={blog2} className="img-responsive" alt="blog 1" style={{"width":"100%"}}/>
      <h4 className="text-center">Go Solar!</h4>
    <p className="small">Sure, you have to pay for those solar panels, but they are cheaper (in the long run) than electricity. The
 average household that goes solar is likely to save all that they have spend pulse thousands of dollars more
 over the course of having a solar system’s in their lifetime.<br/><br/>
 Luckily, electricity usage, electricity costs, and sunshine are all pretty predictable factors.</p>
 <h4 className="text-center">Switch To LEDs!</h4>
 <p className="small">Now, beyond the big boy, probably the next best step you can take is ditching your incandescent light bulbs for
 LEDs. However, the cost of even more-efficient LEDs has come down tremendously in recent years, and
 probably your best options for low-cost, high-efficiency, green lighting.<br/><br/>
 LEDs, on the other hand, are a completely different technology and don’t require or contain any mercury. Now
 that the cost of LEDs has come down so far, I think they will quickly grow in use and replace both incandescent
 and CFL bulbs.</p>
 <h4 className="text-center">Cut Your AC Needs</h4>
 <p className="small">Air conditioning is a major electricity hogs for a large number of people. How many times have you been
 somewhere on a hot day in which the air condition was on so high that you had to put on more clothes to warm
 up? It’s all too common, and maybe you even have the AC set in such a way in your home. Give it some
 thought. Rather than paying a fortune to freeze yourself, or even to keep it cooler than your body really needs,
 lower your electric bill by simply raising your thermostat.<br/><br/>
 And if you want to go even further, turn on a fan to keep cool so that you can turn the temperature on the AC
 up even further, or can even turn it off altogether. Blowing air on yourself takes a lot less energy than turning
 hot air into cold air.</p>
 <h4 className="text-center">Don’t Use Electricity When You’re Not Using It</h4>
 <p className="small">Unfortunately, most of us keep things plugged in for hours or even days between the times we actually use
 them. This includes TVs, computers, DVD players, DVRs, Xbox and Play station consoles, our air conditioning
 or heating (when we are out), toaster ovens, and much more. These things are then using electricity even when
 you are not using them. I’ve read that DVRs and gaming consoles are especially electricity needy even when
 not in use.<br/><br/>
 Simply unplug these things when you aren’t going to use them for several hours or perhaps even days.<br/><br/>
 If you’re concerned this is too complicated for you, there are several of standby electricity plugs that you can
 use.</p>
 <h4 className="text-center">Ditch Your Old Fridge</h4>
 <p className="small">Old refrigerators are huge energy hogs. In fact, if you have multiple fridges of any age, consider scaling back to
 just one. Refrigerators are big energy consumers. If you just have one refrigerator but it’s really old, you may
 still end up saving money by upgrading to a new one. Look into it. Do the math or call.</p>
 <h4 className="text-center">Upgrade</h4>
 <p className="small">New appliances are much more energy efficient. If you’ve got a really old appliance it may save you money to
 finally upgrade. This goes for TVs, refrigerators, computers and much more.</p>
 <h4 className="text-center">Move</h4>
 <p className="small">Moving isn’t always the best option to solve your household problems, but sometimes it is. Moving into a
 smaller place or moving to a newer and more energy-efficient place could be a good solution for you.</p>
    </div>
    </div>
  </div>
  </div>

  <div className="modal fade" id="blog3" tabindex="-1" role="dialog" aria-labelledby="disclaimer" aria-hidden="true">
   <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">

      <div className="modal-body img-responsive">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button><h2>Grid Tie System Warranty</h2><hr/>
       <img src={blog3} className="img-responsive" alt="blog 3" style={{"width":"100%"}}/>
       <h4 className="text-center">Warranty Coverage on Solar Power System</h4>
     <p className="small">1. Your system carries a warranty of:<br/><br/>
 &#9679; Ten (10) years on the panels<br/>
 &#9679; Four (4) years on the inverter<br/>
 &#9679; Two (2) years on the charge controller (if applicable)<br/>
 &#9679; One (1) year on the batteries (if applicable)<br/>
 &#9679; Six (6) months on miscellaneous materials and equipments<br/><br/>
2. Workmanship/installation warranty is six (6) months<br/><br/>

3. Warranty covers only defects in workmanship, material and equipments<br/><br/></p>
  <h4 className="text-center">Exclusion Clause</h4>
  <p className="small">&#9679; Improper maintenance. (system must be serviced regularly by Solar King)<br/><br/>
 &#9679; Interference with the unit by unauthorized person.<br/><br/>
 &#9679; Damages resulting from use of equipment in a corrosive environment.<br/><br/>
 &#9679; Damages resulting from accident, fire, flood, or acts of God.<br/><br/>
 &#9679; Damages resulting from electrical malfunction within premises.<br/><br/>
 &#9679; Where six (6) months have elapsed and there is a claim for warranty a labour charge shall be
applicable for the replacement/repair of part(s).</p>
     </div>
     </div>
   </div>
   </div>


   <div className="modal fade" id="blog4" tabindex="-1" role="dialog" aria-labelledby="disclaimer" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
     <div className="modal-content">

       <div className="modal-body img-responsive">
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button><h2>Solar King's : Solar Water Heaters</h2><hr/>
        <img src={blog4} className="img-responsive" alt="blog 4" style={{"width":"100%"}}/>
        <h4 className="text-center">The benefits of solar water heating</h4>
      <p className="small">
&#9679; It reduces your energy bills,<br/>&#9679; Sunlight is free, ZERO DOLLAR<br/>
&#9679; Solar hot water is a green, renewable heating system and reduces our carbon dioxide
emissions.</p>
   <h4 className="text-center">How do solar water heating systems work?</h4>
   <p className="small">Solar water heating systems use solar panels called collectors, fitted to your roof.
These collect heat from the sun and use it to heat up water which is stored in a hot
water cylinder (tank). <br/><br/>
There are two types of solar water heating panels:<br/><br/>
&#9679; Evacuated tubes<br/>
&#9679; Flat plate collectors, which can be fixed on the roof tiles or integrated into the roof.</p>
<h4 className="text-center">Is solar water heating right for your home?</h4>
<p className="small">You&#39;ll need around five square meters of roof space which faces East to West
through South and receives direct sunlight for the main part of the day. The panels
don&#39;t have to be mounted on a roof however. They can be fixed to a frame on a flat
roof or hang from a wall. Our team of competent installer will be able to assess your
home and help you choose the best setup to meet your needs.</p>
   <h4 className="text-center">Maintenance</h4>
   <p className="small">Maintenance costs for solar water heating systems are generally very low. Once
fitted our installer will leave written details of any maintenance checks that need to
be carried out from time to time to ensure everything is working properly.<br/><br/>
The most important thing for you to check for is whether there are any leaks. If you
are not getting hot water or the solar pipe work is cold and not giving any water, then
you should contact us immediately SOLAR KING offer an annual service check.<br/><br/>
You should have your system checked more thoroughly every 3-7 years, It is likely
that after this period of time</p>
<h4 className="text-center">Savings</h4>
<p className="small">Solar water heating systems can achieve <b><i>savings</i></b> on your energy bills. Based on
the results of a field trial, we conducted across a range of household and system
sizes, typical savings from a well-installed and properly used system are 35,000.00
per year when replacing gas heating and $55,000.00 per year when replacing
electric tank-less heating. Savings will vary from user to user.</p>

      </div>
      </div>
    </div>
    </div>

      </div>

    );
  }
}

export default Why;
