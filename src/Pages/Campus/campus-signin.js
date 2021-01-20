import React from 'react';
import './campus-signin.css';
import { FaFacebookSquare, FaGooglePlus, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const CampusSignin = () => {
    return (
      <section className="campus-container">
        <div className="box">
          
          <div className="campus-content">
            <div className="form">
              <h2>Welcome to Lancebrot School</h2>
              <form>
                <div className="inputBox user">
                  <input className="username" type="text" placeholder="Username" />
                </div>

                <div className="inputBox">
                  <input className="password" type="password" placeholder="Password" />
                </div>

                <p className="forget">
                  Forgot your Password? 
                </p>

                <div className="inputBox">
                  <input type="submit" value="Log in" />
                </div>

              </form>
              <br />
              <div className="campus-social">
                <p>You can log in using:</p>
                <a href="/"><FaFacebookSquare className="campus-facebook" /></a>
                <a href="/"><FaGooglePlus className="campus-google" /></a>
                <a href="/"><FaTwitterSquare className="campus-twitter" /></a>
                <a href="/"><FaInstagramSquare className="campus-instagram" /></a>
                <a href="/"><FaLinkedin className="campus-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CampusSignin;