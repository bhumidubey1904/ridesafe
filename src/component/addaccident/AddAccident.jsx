import React from 'react'
import {AiOutlineUpload} from 'react-icons/ai';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const AddAccident = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();

      // console.log(e.target.user_name.value);
  
      emailjs.sendForm('service_u6g4tbo', 'template_irylxcc', form.current, '1KCiAW7M_Ey2GgcD-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      e.target.reset();
    };

  return (

    <section id="AddAccident" className='flex flex-col items-center justify-center'>
      <h1 className='mb-2 text-gray-400'>Report the Accident</h1>

      <form action="" ref={form} onSubmit={sendEmail} className='font-serif  w-1/2 rounded flex flex-col space-y-4 p-3 border-y border-solid border-red-500'>
        <input type="text" className='font-medium  rounded-md border border-solid border-red-500 shadow-md p-2 text-left font-serif w-full' name="route_from" placeholder='Route : From' required/>
        <input type="text" className='font-medium rounded-md border border-solid border-red-500 shadow-md p-2 text-left font-serif w-full'  name="route_to" placeholder='Route : To' required />

        <textarea name="description" id="" cols="30" rows="10" className='resize-none border border-solid border-red-500 font-medium rounded-md shadow-md p-2 text-left font-serif w-full' placeholder='Describe the scenrio....(Add Landmark)'></textarea>

        <input type="text" name="user_name" id="" className='font-medium  rounded-md border border-solid border-red-500 shadow-md p-2 text-left font-serif w-full' placeholder='Your Email' required/>

        <div className='flex justify-center space-x-4 items-center'>

        <label htmlFor="inputTag" className='text-white bg-red-500 rounded-md flex h-12 justify-center w-40 items-center space-x-2 cursor-pointer'> <AiOutlineUpload/> <span>Upload Image</span>
        <input type="file" id="inputTag" className='hidden'/> </label>

        <input type="submit" className='w-40 h-12 text-gray-500 text-center rounded-md border border-solid border-red-600 hover:bg-red-500 hover:text-white duration-150'/>
        </div>
      </form>
    </section>
  )
}

export default AddAccident;