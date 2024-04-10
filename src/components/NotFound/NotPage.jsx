import React from 'react'

import './NotPage.css'
import ImgVoid from '../../resources/img/ImgVoid.png'
import { Link } from 'react-router-dom'

export const NotPage = () => {
  return <div className='notfound'>
    <h1>Algo anda mal...</h1>
    <img className='notfound-img' src={ImgVoid} alt='PageNotFound'/>
    <h1>Oh... ¿Es eso el vacio? - <Link to='/'>Click aquí para ir al Home</Link></h1>
  </div>
}
