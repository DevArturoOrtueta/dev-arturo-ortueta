import React from 'react'
import { Services } from './Services/Services'
import { Hero } from './Hero/Hero'
import './Home.css'
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
      <div className='home-contact'>
          <Contact/>
      </div>
    </div>
  )
}
