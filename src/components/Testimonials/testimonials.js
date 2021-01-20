import React from 'react';
import './testimonials.css';
import test1 from '../img/test1.jpg';
import test2 from '../img/test2.jpg';
import test3 from '../img/test3.jpg';

const Testimonials = () => {
    return (
        <>
            <div className="courses-title">
                <h2>Testimonials</h2>
                <p>This is how our graduates think of us</p>
            </div>
            <div className="courses-testimonials">  
                <div class="courses-testimonial courses-testimonial-center">
                    <div class="courses-test-box">
                        <div class="courses-img-cover">
                            <img src={test1} alt="graduates"/>
                        </div>
                        <p>
                            "This course changed my way of seeing the bakery. I no longer only appreciate it as something monetary, but I am passionate about seeing that what I have implemented in my bakery is valued by the clients, it was an exciting and beautiful experience.".
                        </p>
                        <span>Bruno O'mahony</span>
                    </div>
                </div>

                <div class="courses-testimonial courses-testimonial-center">
                    <div class="courses-test-box">
                        <div class="courses-img-cover">
                            <img src={test2} alt="graduates"/>
                        </div>
                        <p>
                            "I did not think that the course was so intense and complete. I feel like I did a higher study in baking, because I didn't know anything about baking or cooking. I loved. It was a rewarding experience that changed my vision of the bakery".
                        </p>
                        <span>Angie Cox</span>
                    </div>
                </div>

                <div class="courses-testimonial courses-testimonial-center">
                    <div class="courses-test-box">
                        <div class="courses-img-cover">
                            <img src={test3} alt="graduates"/>
                        </div>
                        <p>
                            "In these two weeks, I discovered that this course goes beyond training in a trade. It´s a specialized study that demands commitment but at the same time it is so easy to enjoy making bread that you don't feel like you're studying, you learn to fall in love with the art of baking".
                        </p>
                        <span>Antoine Johnson</span>
                    </div>
                </div>                       
            </div>
        </>
    );
}

export default Testimonials;