import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
    <div className='paddings innerWidth flexCenter f-Container'>
    <div className='flexColStart f-left'>
    <img src='./logo2.png' alt='logo' width={120}/>
    <span className='secondaryText'>Our vision is to make all people
    the best place to live for them.</span>
    </div>
    <div className='f-right flexColStart'>
    <span className='primaryText '>Information</span>
    <span className='secondaryText'>145 New York, FL 5467, USA</span>
    <div className='flexCenter f-menu'> 
    <span> Property</span>
    <span>AboutUs</span>
    <span>Products</span>
    <span>services</span>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Footer