import React, { useState, useRef } from 'react';

import img1 from "../assets/mountain1.jpg"
import img2 from "../assets/mountain2.jpg"
import img3 from "../assets/mountain2.jpg"
import img4 from "../assets/mountain3.jpg"
function History() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed by multiplying with a factor
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className='history' id="history">
      
      <div className="heading heading-2">
            <div className='head1'>
            <h1>01.</h1>
            </div>
            <div className='head2'>
                HISTORY
            </div>
            <div  className='head4' >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia deserunt sequi aut eum odio praesentium commodi laborum 
            </div>
        </div>
        <div className="horizontal-scroll-container carousel" ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}>
              <img src={img1} alt="" className='horizontal-scroll-content'/>
              <img src={img3} alt="" className='horizontal-scroll-content'/>
              <img src={img2} alt="" className='horizontal-scroll-content'/>
              <img src={img4} alt="" className='horizontal-scroll-content'/>
              <img src={img1} alt="" className='horizontal-scroll-content'/>
              <img src={img3} alt="" className='horizontal-scroll-content'/>
              <img src={img2} alt="" className='horizontal-scroll-content'/>
              <img src={img4} alt="" className='horizontal-scroll-content'/>
              <img src={img1} alt="" className='horizontal-scroll-content'/>
              <img src={img3} alt="" className='horizontal-scroll-content'/>
              <img src={img2} alt="" className='horizontal-scroll-content'/>
              <img src={img4} alt="" className='horizontal-scroll-content'/>
        </div>
      </div>
  )
}

export default History