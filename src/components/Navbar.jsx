import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.jpg"
function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <nav className={scrolling ? 'navbar scrolled' : 'navbar'}>
        <img src={logo} alt="" className='logo'/>
        <div className='links'>
            <a href="#history" className='links2'>01 History</a>
            <a href="#climb" className='links2'>02 Team</a>
        </div>
      </nav>
    )
}

export default Navbar


