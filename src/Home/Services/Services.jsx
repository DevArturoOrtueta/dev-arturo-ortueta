import './Services.css'
import { Cards } from '../../components'
import React from 'react'

export const Services = () => {
  return (
    <div className='services-main'>
      <div>
        <h1>Services</h1>
      </div>
      <div className='services-body'>
        <Cards title='UI/UX' body='Te puedo ayudar con lo que necesites para que el usuario final se sienta comodo con sus aplicaciones.'/>
        
        <Cards title='UI/UX' body='Te puedo ayudar con lo que necesites para que el usuario final se sienta comodo con sus aplicaciones.'/>
      
        <Cards title='UI/UX' body='Te puedo ayudar con lo que necesites para que el usuario final se sienta comodo con sus aplicaciones.'/>
      
      </div>
    </div>
  )
}
