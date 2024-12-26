import React from 'react'
import './Card.css';
import { FaReact } from "react-icons/fa";
import Sbutton from '../Utilize/Secbutton/Sbutton'

function Card() {
  return (
    <div className='cardbg'>
        <div className='icn'> <FaReact /></div>
        <div className='titleco'>
            <div className='ttcont'><h2>Web Development</h2></div>
            <div className='contents'>Our expert team of web developers, designers, and strategists are dedicated to crafting cutting-edge websites.</div>
            <div className='btun'><Sbutton text={"Read more"}/></div>
        </div>
       
    </div>
  )
}

export default Card