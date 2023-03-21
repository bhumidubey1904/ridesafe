import React from 'react'
import './nav.css';

import {AiOutlineHome} from 'react-icons/ai';
import { useState } from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {MdOutlineReportProblem} from 'react-icons/md';
import {AiFillCaretDown} from 'react-icons/ai';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' onClick={ () => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>

      <a href='#AddAccident' onClick={ () => setActiveNav('#AddAccident') } className= {activeNav === '#AddAccident' ? 'active' : '#AddAccident'} ><AiOutlinePlusCircle/></a>

      <a href='#AddGrievance' onClick={ () => setActiveNav('#AddGrievance')} className= {activeNav === '#AddGrievance' ? 'active' : '#AddGrievance' }><MdOutlineReportProblem /></a>

      <a href='#footer' onClick={ () => setActiveNav('#footer')} className= {activeNav === '#footer' ? 'active' : '#footer'}><AiFillCaretDown/></a>
    </nav>
  );
}

export default Nav