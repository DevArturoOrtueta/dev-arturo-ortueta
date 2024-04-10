import React from 'react'

import {Cards} from '../components/index'
import { Services } from './Services/Services'
import { Hero } from './Hero/Hero'
import './Home.css'
import { Feedback } from './Feedback/Feedback'
import { Contact } from './Contact/Contact'

export const Home = () => {
  return (
    <div  className='home-main'>
      <div className='home-hero'>
        <Hero/>
      </div>
      <div className='home-services'>
          <Services/>
      </div>
      <div className='home-feedback'>
          <Feedback/>
      </div>
      <div className='home-contact'>
          <Contact/>
      </div>
    </div>
  )
}
