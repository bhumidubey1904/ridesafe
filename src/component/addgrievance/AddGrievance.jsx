import React from "react";
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineUpload} from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Experience = () =>{
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_u6g4tbo', 'template_bsb3f9j', form.current, '1KCiAW7M_Ey2GgcD-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      e.target.reset();
    };


    return (
        <section id="AddGrievance" className="font-serif flex flex-col items-center justify-center">
            {/* one recent Updates */}
            <h1 className="mb-2 text-gray-400">Add Your Grievances</h1>

            <div className="flex w-1/2 space-x-10 aspect-square p-4 border-t border-solid border-red-500">

                <div className="flex flex-col space-y-2 text-gray-500">
                    <article className="flex flex-col items-center justify-center w-36 aspect-square border border-solid border-red-500 p-4 rounded-md shadow-md">
                        <div className="flex items-center space-x-2 text-black">
                            <MdOutlineEmail/>
                            <h4>Email</h4>
                        </div>
                        <a href="mailto:dubeybhumi82@gmail.com" target='_blank' className="text-sm">Send Message</a>
                    </article>
                    <article className="flex flex-col items-center justify-center w-36 aspect-square border border-solid border-red-500 p-4 rounded-md shadow-md">
                        <div className="flex items-center space-x-2 text-black">
                            <AiOutlineWhatsApp/>
                            <h4>Whatsapp</h4>
                        </div>
                        <a href="https://wa.me/+918320871229" target='_blank' className="text-sm">Send Message</a>
                    </article>
                    <article className="flex flex-col items-center justify-center w-36 aspect-square border border-solid border-red-500 p-4 rounded-md shadow-md">
                        <div className="flex items-center space-x-2 text-black">
                            <MdOutlineEmail/>
                            <h4>Messanger</h4>
                        </div>
                        <a href="princekr.it.21@gmail.com" target='_blank' className="text-sm">Send Message</a>
                    </article>
                </div>

                <form action="" ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
                {/* second form to fill */}
                    <input type="text" name="subject" id="routeFrom" placeholder="Subject" className="p-2 border border-solid border-red-500 rounded-md shadow-md "/>

                    <textarea name="grievance" id="" cols="60" rows ="5" className="resize-none p-2 border border-solid border-red-500 rounded-md shadow-md" placeholder="Describe your problem.."></textarea>

                    <input type="text" name="user_name" id="" className='font-medium  rounded-md border border-solid border-red-500 shadow-md p-2 text-left font-serif w-full' placeholder='Your Email' required/>

                    <div>
                        <label htmlFor="routeFrom" className="flex flex-col space-y-2">
                            <span className="text-gray-700">Select Your Route</span>
                            <input type="text" name="route_from" id="routeFrom" placeholder="Route : From" className="p-2 border border-solid border-red-500 rounded-md shadow-md "/>
                            <input type="text" name="route_to" id="routeTo" placeholder="Route : To" className="p-2 border border-solid border-red-500 rounded-md shadow-md"/>
                        </label>
                    </div>

                    <div className="flex justify-center space-x-4 items-center">
                    <label htmlFor="inputTag" className='text-white bg-red-500 rounded-md flex h-12 justify-center w-40 items-center space-x-2 cursor-pointer'> <AiOutlineUpload/> <span>Upload Image</span>
                    <input type="file" id="inputTag" name="route_from" className='hidden'/> </label>

                    <input type="submit" name="route_to" className='w-40 h-12 text-gray-500 text-center border rounded-md shadow-md border-solid border-red-600 hover:bg-red-500 hover:text-white duration-150'/>
                    </div>
                </form>


            </div>
            
        </section>
    )
}

export default Experience;