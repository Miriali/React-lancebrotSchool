import React from 'react';
import BaseSuccess from '../img/base2.jpg';

const ContactSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We have received your request!</div>
            <img src={BaseSuccess} alt="success-image" className="form-img-2"/>
        </div>
    );
}

export default ContactSuccess;