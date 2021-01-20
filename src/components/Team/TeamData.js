import React from 'react';
import { Link } from 'react-router-dom';

function TeamData(props) {
  return (
    <>
      <li className='staff__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='staff__item__pic-wrap'>
            <img
              className='staff__item__img'
              alt='Staff image'
              src={props.src}
            />
          </figure>
          <div className='staff__item__info'>
            <h5 className='staff__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default TeamData;