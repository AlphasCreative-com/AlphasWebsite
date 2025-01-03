import React from 'react'
import "./Atwo.css";
import imagelogo from "../../../Assests/Images/alphaslogo.png";
import Sbutton from "../../Utilize/Secbutton/Sbutton";


function Atwo() {
  return (
    <div className='Atwobg'>
        <div className='Atwtitle'>
            <h2 style={{color: "black ", fontSize:'24px' ,fontWeight:'300'}}>(About us)</h2>
            <h1 style={{color: "black ", fontSize:'42px' ,fontWeight:'500' , fontFamily:"unbounded"}}>We are a full-service digital agency dedicated to helping businesses of all sizes thrive</h1>
            <div className="sebutton">
                <Sbutton text="Learn more" />
            </div>
        </div>
        <div className='logosec'>
        <img src={imagelogo} alt="logo" />

        </div>
       
    </div>
  )
}

export default Atwo