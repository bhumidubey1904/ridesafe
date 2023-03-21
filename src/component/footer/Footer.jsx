import React from 'react'
import {AiFillInstagram} from 'react-icons/ai';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlinePropertySafety} from 'react-icons/ai';
import {MdHealthAndSafety} from 'react-icons/md';
import {FaTrafficLight} from 'react-icons/fa';
import {MdDriveEta} from 'react-icons/md';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';


const Footer = () => {
  return (
    <section id="footer" className='relative'>
      <div className='h-16 bg-red-400 flex items-center pl-4'>
        <h1 className=' text-3xl text-white font-bold flex items-center space-x-2'> <AiOutlinePropertySafety className='mr-2 text-red-900'/> Team <span className='italic underline'>Coder'sBlock</span></h1>
      </div>
      <div className='h-40 p-8 bg-gray-200 flex justify-between'>
        {/* socialMedia Strip */}
        <div>
          <h1 className='text-sm text-gray-600 font-serif pl-2 mb-2' >Follow us on</h1>
          <div className='flex space-x-2'>
            <a><AiFillInstagram className='text-red-500 text-5xl cursor-pointer shadow'/></a>
            <a><AiOutlineWhatsApp className='text-green-500 text-5xl cursor-pointer shadow'/></a>
            <a><AiFillTwitterCircle className='text-blue-500 text-5xl cursor-pointer shadow'/></a>
            <a><AiFillFacebook className='text-blue-800 text-5xl cursor-pointer shadow'/></a>
          </div>
          <div className='absolute flex items-center space-x-2 bottom-2 text-sm left-9'><span>Copyright</span><AiOutlineCopyrightCircle/>
          <span>2023-2047 Team Coder'sBlock. All rights reserved</span></div>
        </div>

        <div className='flex flex-col space-y-1'>
          <h1 className='text-2xl text-gray-800'>More Links</h1>
          <a href="https://vikaspedia.in/social-welfare/social-awareness/consumer-education/safe-driving/tips-for-safe-driving" target='_blank' className='cursor-pointer text-gray-600 text-sm flex items-center space-x-2'><MdHealthAndSafety/> <span>Safety Rules and Laws</span></a>

          <a href="https://lawlex.org/lex-pedia/traffic-laws-in-india/20672#:~:text=Anyone%20who%20is%20above%2018,to%20drive%20a%20transport%20vehicle." className='cursor-pointer text-gray-600 text-sm flex items-center space-x-2' target='_blank'> <FaTrafficLight/>  <span>Traffic Laws</span> </a>

          <a href="https://www.godigit.com/traffic-rules/traffic-rules-every-motor-vehicle-drive-in-india-should-know" className='cursor-pointer text-gray-600 text-sm flex items-center space-x-2' target='_blank'> <MdDriveEta/>  <span>Driving Laws</span></a>
        </div>
      </div>
    </section>
  )
}

export default Footer