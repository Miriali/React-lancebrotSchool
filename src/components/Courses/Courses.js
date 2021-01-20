import React from 'react';
import './Courses.css';
import CoursesData from './CoursesData';
import salado from '../img/salado.jpg';
import dulce from '../img/dulce.jpg';
import artesanal from '../img/artesanal1.jpg';
import viennoiseries from '../img/Viennoiseries.jpg';
import pizza from '../img/pizza1.jpg';
import internacional from '../img/internacional.jpg';

function Courses() {
  return (
    <div className='cards'>
      <h2>Our Courses</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CoursesData
              src={salado}
              text='Savory Breads'
              label='Beginner'
              path='/courses'
            />
          
            <CoursesData
              src={dulce}
              text='Sweet Breads'
              label='Beginner'
              path='/courses'
            />
          </ul>

          <ul className='cards__items'>
            <CoursesData
              src={artesanal}
              text='Artisan Breads'
              label='Intermediate'
              path='/courses'
            />

            <CoursesData
              src={viennoiseries}
              text='Viennoiseries'
              label='Advanced'
              path='/courses'
            />
          
            <CoursesData
              src={pizza}
              text='Pizzas'
              label='Beginner'
              path='/courses'
            />
          
            <CoursesData
              src={internacional}
              text='International Breads'
              label='Advanced'
              path='/courses'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Courses;