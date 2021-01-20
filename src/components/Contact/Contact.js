import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>We are open to receive your suggestions and questions</p>
      </div>
      <div className="form-content">
        <form action="#">
          <div className="fields">
            <div className="field name">      
						  <input type="text" placeholder="Name" required />
						</div>

            <div className="field email">    
              <input type="email" placeholder="Email" required />
						</div>
          </div>

            <div className="field subject">
              <input type="text" placeholder="Subject" required />
						</div>

            <div className="fields textarea">
						  <textarea cols="30" rows="10" placeholder="Message..." required />
						</div>

            <div className="button">
						  <button type="submit">Send message</button>
						</div>     
        </form>
      </div>
    </div>
  );
}

export default Contact;

