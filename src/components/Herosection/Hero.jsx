import React from 'react'
import Button from '../Utilize/Button/Button'
import Sbutton from '../Utilize/Secbutton/Sbutton'
import "./Hero.css";


function Hero() {
  return (
    <div className='body'>
        <div className='txt'>
            <div className='hdtitle'>
            <h3>We Create</h3>
            <h1>Digital Solutions</h1>
            <h4>Our professional team is dedicated to helping <br></br> you achieve your
            digital goals. From website design and development to branding</h4>
            </div>
          
        </div>
        <div className='btnsec'>
            <Button text={"Get Started"}/>
            <Sbutton text={"See Features"}/>
            
        </div>
    </div>
  )
}

export default Hero