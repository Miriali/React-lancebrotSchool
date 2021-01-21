import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
                <p>Lancebrot <span>Bakery School</span></p>
            </Link>
          </div>
          
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'>
              <FaFacebookSquare />
            </Link>

            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'>
              <FaInstagramSquare />
            </Link>

            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'>
              <FaYoutubeSquare />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'>
              <FaTwitterSquare />
            </Link>
          </div>
        </div>
        <div className="developed">
          <p>Designed and Developed by <a href="https://twitter.com/miricailopez">Miriali López</a></p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
