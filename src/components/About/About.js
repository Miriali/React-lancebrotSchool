import React from 'react';
import './About.css';
import picture from '../img/about.jpg';

function About() {
    return (
      <div className="section">
        <div className="container about">
          <div className="left">
            <div class="title">
              <h2>About Us</h2>
            </div>
            
            <p>
              Lancebrot Bakery School is a recognized school dedicated to the teaching of the art of bakery focused mainly on the teaching of artisan bakery, the valuation of its processes, aromas, desired temperatures and respect for the ingredients and the diners.
            </p>

            <p>
              Our students learn both the proper treatment that each dough warrants as well as the preventive measures that each person who participates in the kitchen must take to always provide the diners with healthy, nutritious and delicious products.
            </p>
          </div>

          <div class="right">
            <img src={picture} alt="baker"/>
          </div>
        </div>
      </div>
    );
}
  
export default About;