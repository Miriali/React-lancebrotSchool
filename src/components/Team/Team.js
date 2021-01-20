import React from 'react';
import './Team.css';
import TeamData from './TeamData';
import Chef1 from '../img/chef-1.jpg';
import Chef2 from '../img/chef-2.jpg';
import Chef3 from '../img/chef-3.jpg';
import Chef4 from '../img/chef-4.jpg';

function Team() {
  return (
    <div className='team'>
      <h2>We have the best staff</h2>
      <div className='staff'>
        <div className='staff__wrapper'>
          <ul className='staff__items'>
            <TeamData
              src={Chef1}
              text='Angela Leipzig'
              path='/team'
            />
            <TeamData
              src={Chef2}
              text='Phil Lee'
              path='/team'
            />
          </ul>
          
          <ul className='staff__items'>
            <TeamData
              src={Chef3}
              text='Bettina Johnson'
              path='/team'
            />
            <TeamData
              src={Chef4}
              text='Felipe Brunelli'
              path='/team'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Team;