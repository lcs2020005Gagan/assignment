
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { useState } from 'react';
import img1 from "../assets/mountain1.jpg"
import Mountain1 from './Mountain1';
import Mountain2 from './Mountain2';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

function Climb() {
    const [toRender,setToRender]=useState("mountain1");
  return (
    <div className='climb' id="climb">
        <div className="heading">
            <div className='head1'>
            <h1>02.</h1>
            </div>
            <div className='head2'>
                CLIMB
            </div>
            <div className='head3'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia deserunt sequi aut eum odio praesentium commodi laborum 
            </div>
        </div>
        <div className='ProfileJsTabs laptop-view' >
            <div className={`ProfileJsTabsLi ${toRender==="mountain1"?"UlListActive":""} `} onClick={()=>setToRender("mountain1")}>

            <li >
                Mountain 1
            </li>
            </div>
            <div className={`ProfileJsTabsLi ${toRender==="mountain2"?"UlListActive":""} `} onClick={()=>setToRender("mountain2")}>


            <li >
                Mountain 2
            </li>
            </div>
            
            
        </div>
        <div className="laptop-view">

        {toRender=="mountain1"&&<Mountain1/>}
        {toRender=="mountain2"&&<Mountain2/>}
        </div>
        <div className="mobile-view">

        <Accordion className="accordion"><AccordionSummary>Mountain 1</AccordionSummary>
        <AccordionDetails>
          <Mountain1/>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary>Mountain 2</AccordionSummary>
        <AccordionDetails>
         <Mountain2/>
        </AccordionDetails>
      </Accordion>
        </div>
    </div>
    
  )
}

export default Climb





