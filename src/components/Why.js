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
   <li><a>Air-Conditioning Systems</a></li>
 </ul>
 <div class="description">
     <h1>Air-Conditioning Systems</h1>
     <h2>How does an air-conditioner work?</h2>
     <p class="summary">An air conditioner can change the temperature, humidity or general quality of the air. More specifically, an air conditioner makes your home cooler, by drawing heat energy out of the house and transferring that heat to the outdoors, then replacing the air inside your home with cooler air.</p>
     <a data-toggle="modal" data-target="#blog2" style={{"cursor":"pointer"}}>Read More</a>
 </div>
</div>

<div class="blog-card">
<div class="photo photo3"></div>
<ul class="details">
  <li>Supplementary Information </li>
  <li><a>How does a solar grid-tied system work?</a></li>
</ul>
<div class="description">
 <h1>Grid Tie Systems</h1>
 <h2>How does a solar grid-tied system work?</h2>
 <p class="summary"><ul>
<li>For homeowners considering installing solar panels, an important consideration is whether or not the home’s solar panel system should be connected to the grid (grid-tied) or off the grid.
Although off-grid homes were more common in the past, grid-tied homes are increasing as the affordability and popularity of solar systems increase.</li></ul></p>
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
     </button><h2>Air-Conditioning Systems</h2><hr/>
     <img src={blog1} className="img-responsive" alt="blog 2" style={{"width":"100%"}}/>
     <h4 className="text-center">How does an air-conditioner work?</h4>
     <p>The air conditioner in a central heating and cooling system provides cool air through ductwork inside your home, by providing a process that draws out the warm air inside, removing its heat.
<br/><br/>
In a split system, the compressor condenses and circulates the refrigerant through the outdoor unit, changing it from a gas to a liquid. The liquid is then forced through the indoor evaporator coil or cooling compartment. The indoor unit’s fan circulates the inside air to pass across the evaporator fins. The evaporator’s metal fins exchange the thermal energy with the air around it. There, the refrigerant turns from liquid into vapor, removing any heat from the surrounding air. As the heat is removed from the air, the air is cooled and blown back into the house.
<br/><br/>
From that point, the condenser or outdoor unit then turns the refrigerant vapor back into a liquid, removing any heat. By the time the fluid leaves the evaporator again, it is a cool, low-pressure gas, eventually returning to the condenser to begin its trip all over again. This process continues again and again until your home reaches the cooling temperature you want, as programmed and sensed by your thermostat setting.
</p>

<h4 className="text-center">Benefits of Good Air Conditioning</h4>
<p>&#9679; It’s literally a life saver <br/>
An Environmental Protection Agency study of heat-related deaths found that more than 9,000 Americans died from the heat between 1979 and 2013, a figure which does not even fully capture the magnitude of the problem. Many more deaths have heat as a contributing factor but not the main cause. Keeping cool with an efficient air conditioner is the best means of preventing heat-related deaths and illnesses, according to the Centers for Disease Control and Prevention.<br/><br/>
&#9679; Better air quality<br/>
Air conditioners circulate and filter air, removing pollutants and mold from the air. This is especially important for people who suffer from allergies and asthma because it minimizes the irritants that trigger an attack. This only hold true, however, if your system is kept clean and filters are regularly changed. Otherwise, the AC can actually contribute to indoor air pollution.<br/><br/>
&#9679; Fewer insects and parasites <br/>
The filters also keep out insects and are far more effective than a screen in an open window. Insects are annoying but they can also be dangerous to people with allergies. A good air conditioning system can help keep indoor pets flea and tick free,
as well.<br/><br/>
&#9679; Improved work force efficiency<br/>
We’ve all experienced the mental sluggishness that comes with a day that is just too hot. There’s actually a scientific basis for this. According to an article in Scientific American, the energy the body expends trying to cool itself down takes away from our ability to think and reason. When offices are air conditioned, people are able to work better and make better decisions.<br/><br/>
&#9679; Cooler tempers<br/>
It’s not just our brains that suffer from the heat either. When the mercury rises so do tempers.  As an article on Today.com explains, while our brains are slowing down, our bodies are speeding up with increased heart rates and higher blood pressure. All this leads to more aggressive behavior making a cool environment key to maintaining peace at home, work, and in public places.<br/><br/>
&#9679; Easier sleep<br/>
Those same physical changes – higher heart rate and blood pressure – that make us angry can also make it next to impossible to get a good night’s sleep. One’s core body temperature is also a critical factor in getting to and staying asleep. A too hot (or too cold) room interferes with natural temperature regulation which doctors say functions best at between 65 and 75 degrees.<br/><br/>
&#9679; Protects furniture<br/>
Heat, and especially the humidity that often accompanies it, can wreak havoc on furniture of all kinds. Wood gains and loses moisture with the air around it which over time leads to warping. Leather also absorbs moisture which could eventually cause that stylish couch to rot. And any fabric is susceptible to the mold that breeds rampantly in damp environments.<br/><br/>
&#9679; Prevents electronic devices from overheating<br/>
Almost as scary as the effects of heat and humidity on our bodies is the damage they can do to our electronics. The phones and computers we depend on daily can suffer serious meltdowns when the temperature goes up leading to loss of data and an overall shorter lifespan. If your place of work includes computer servers, they can be completely destroyed or at least suffer major damage if not kept cool enough.<br/><br/>
&#9679; Better security<br/>
We’ve already discussed how open windows, even with screens, are limited when it comes to keeping bugs out. They’re even worse at keeping out unwanted people. Depending on where you live or work, an unsecure window or door simply isn’t safe. You want to keep your loved ones and valuables protected from both the elements and the unpleasant side of humankind.<br/>
&#9679; Fewer sweat stains<br/>
This pales in comparison to many of the other issues, but the heat can be murder on your clothes.  Unsightly discoloration from sweat can cause serious embarrassment and send a favorite shirt to the rag bag. Keeping cool with a central air conditioning system can help preserve your wardrobe and your budget.
</p>
<div id="accordion">
<div class="card">
  <div class="card-header" id="headingOne">
    <h5 class="mb-0">
      <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Warranty
      </button>
    </h5>
  </div>
  <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
    <div class="card-body">
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
<p className="small">References: <a href="https://www.trane.com/residential/en/resources/hvac-basics/how-does-an-air-conditioner-work.html">
https://www.trane.com/residential/en/resources/hvac-basics/how-does-an-air-conditioner-work.html</a><br/><a href="https://armstrongairinc.com/10-benefits-of-good-air-conditioning/">
https://armstrongairinc.com/10-benefits-of-good-air-conditioning/</a></p>

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
       </button><h2>Grid Tie Systems</h2><hr/>
       <img src={blog3} className="img-responsive" alt="blog 3" style={{"width":"100%"}}/>
       <h4 className="text-center">What is a Grid-Tied System</h4>
       <p>A grid-tied solar panel system is simply a solar energy system that is connected to the electrical grid and, therefore, uses electricity from both the solar panel system and the electrical grid. Because of this, a grid-tied solar system doesn’t have to meet all of the electricity demands of the home.
If needed, the home can draw energy from the grid at times (such as on cloudy days or at night) when solar panels are not producing at full efficiency. Likewise, if more energy than is needed is generated by the solar panels of one home, that excess energy will be fed into the grid for use elsewhere.
</p>
<h4 className="text-center">Connecting your home to the grid</h4>
<p>Connecting your home to the grid will require involvement from you and the provider of your solar panel system.
For starters, your solar system provider must know the local interconnection laws. The interconnection laws are rules and procedures that specifically apply to situations where a renewable energy system such as a solar energy system is “plugged” into the power grid. The interconnection laws state the terms that must be followed by both solar energy system owners and utilities.
In order to get started with a grid-tied system, your solar system provider will file interconnection and net metering applications to the utility company.
</p>
<h4 className="text-center">Benefits of a grid-tied system</h4>
<p>A grid-tied solar system has several major advantages over off-the-grid solar systems:<br/><br/>
Reliability: Solar panel systems are not perfect. There are bound to be days when efficiency is not what it could be and the system doesn’t produce enough. However, many of your daily (and nightly) activities will continue to require the use of electricity.
Unlike off-grid systems which may run out of power, grid-tied solar systems are less likely to leave you in the dark at inopportune times. If the power generated from your solar panel system is less than optimal, extra energy will be pulled from the grid. The grid essentially acts as a backup for your solar energy system.
Less energy is wasted as a result and the efficiency of your solar power system goes up. Except in the event of a power outage, you will always have access to electricity during any time of day, as long as your system is connected to the grid.
<br/><br/>
Costs: To function properly, off-grid solar energy systems require more specialized equipment that gets expensive quickly. Clearly, less equipment generally means lower installation and maintenance costs. This happens to be the case with most grid-tied systems. Since the power grid functions as a battery for your system, you not only don’t have to pay for batteries, you do not have to pay for the maintenance that is involved with those batteries.
<br/><br/>
Net metering: The key concept to understand about a grid-tied system is that it gives you the ability to feed power to the grid during the day, when you may be producing excess energy, and to use the grid supply at night. Net metering is a billing process that credits the owners of grid-tied systems when they produce more energy than the home needs.
Because grid-tied homes are usually net-metered, the power meter tracks this exchange between your solar system and the grid. Excess energy generation leads to your power meter spinning backward rather than forward, thus giving you a credit. The credit can be used to offset payments for future power usage.
</p>
       <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Warranty
        </button>
      </h5>
    </div>
    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
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
<p className="small">Reference: <a href="https://rgsenergy.com/how-solar-panels-work/how-does-a-solar-grid-tied-system-work/">
https://rgsenergy.com/how-solar-panels-work/how-does-a-solar-grid-tied-system-work/</a></p>

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
