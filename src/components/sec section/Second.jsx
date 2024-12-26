import React from 'react'
import './Second.css';
import  image  from "../../Assests/Images/sec.jpeg";
import { useState, useEffect, useRef } from "react";

function Second() {
  
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation
        }
      },
      { threshold: 0.6 } // Trigger when 10% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
   };
  }, []);
  
  return (

    <div className= {`anime ${isVisible && 'visible'}`} ref={componentRef}>

<div className='sebody'>
       
       <div className='headersec'>
       <h6 className='sub'>ABOUT US</h6>
       <h5 className='hd'>Empower your innovative ideas with Axole</h5>
      

       <h6 className='Secontent'>Welcome to Axole, where digital innovation meets creative excellence. As a premier digital agency, we
         pride ourselves on being at the forefront of technology.</h6>

       </div>

       
         
       
  
   <div className='img'><img src={image} alt="" /></div>



</div>


    </div>
    
  )
}

export default Second