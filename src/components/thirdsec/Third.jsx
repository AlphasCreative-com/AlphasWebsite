import React from 'react'
import  './Third.css';
import Card from '../Card/Card';
import { useState, useEffect, useRef } from "react";

function Third() {


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
  <div className='thirdbg'>
        <div className='thirdtitle'> <h5>What we do</h5></div>
        <div className='cardset'>
            <Card/>
            <Card/>
            <Card/>
        </div>

    </div></div>

    
  )
}

export default Third