import React from 'react'

import './NotPage.css'
import ImgVoid from '../../resources/img/ImgVoid.png'
import { Link } from 'react-router-dom'

export const NotPage = () => {
  return <div className='notfound'>
    <img className='notfound-img' src={ImgVoid} alt='PageNotFound'/>
    <h1>Ups veo que estas perdido - <Link to='/'>Click aquí para ir al Home</Link></h1>
  </div>
}
