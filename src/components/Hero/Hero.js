import React from 'react';
import './Hero.css';
import { Button } from '../Navbar/Button';
import { FaShoppingBag } from 'react-icons/fa';

function Hero() {
  return (
    <>
      <div className='hero'>
        <div class="content">
          <h1>We are the bread house in Cork</h1>
          <p>
            We provide tutored classes, with the best implements and a complete supply of raw materials, we have the best courses and breads for you.
          </p>

          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hello baby')}>
              Go To Shop <FaShoppingBag />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;