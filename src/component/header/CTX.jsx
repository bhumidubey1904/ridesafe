import React from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'

const CTX = () => {
  return (
    <div className='cta'>
        <a href='#AddAccident' className='btn'> <AiOutlinePlusCircle className='mr'/> Report Accident </a>
        <a href='#AddGrievance' className='btn'><IoMdContact className='mr'/> Contact</a>
    </div>
  )
}

export default CTX