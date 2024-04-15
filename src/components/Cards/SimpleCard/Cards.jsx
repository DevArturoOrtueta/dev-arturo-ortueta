import './Cards.css';

import React from 'react'

export const Cards = ({title, body}) => {
  return <div className='card'>
    <div className='card-title'>
        <h3>{title}</h3>
    </div>
    <div className='card-body'>
        <p>{body}</p>
    </div>
  </div>
  
}

