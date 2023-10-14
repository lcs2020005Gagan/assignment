import React from 'react';
import img1 from "../assets/logo.jpg"

function Footer() {
  return (
    <div className='ftr'>
      <div className='horizontal-container'>
        <img className='ccimg' src={img1} alt=""/>
        <div className='vertical-container'>
          <div className='cc1'>LOS ANGELES</div>
          <div className='cc2'>MOUNTAINS</div>
        </div>
      </div>
      <div className='cc3'>COPYRIGHT 2016. ALL RIGHTS RESERVED</div>
    </div>
  );
}

export default Footer;
